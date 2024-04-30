import Drink from "./models/drinkModel.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';

dotenv.config()
async function main() {
    try {
        await mongoose.connect(process.env.MONGOCONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MONGO CONNECTED');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

main().catch(err => console.log(err));


const app = initializeApp({
    "type": process.env.Firebase_type,
    "project_id": process.env.Firebase_project_id,
    "private_key_id": process.env.Firebase_key_id,
    "private_key": process.env.Firebase_private_key,
    "client_email": process.env.Firebase_client_email,
    "client_id": process.env.Firebase_client_id,
    "auth_uri": process.env.Firebase_auth_uri,
    "token_uri": process.env.Firebase_token_uri,
    "auth_provider_x509_cert_url": process.env.Firebase_auth_provider_x509_cert_url,
    "client_x509_cert_url": process.env.Firebase_client_x509_cert_url,
    "universe_domain": process.env.Firebase_universe_domain,
    "storageBucket": process.env.Firebase_storageBucket,
});
const storage = getStorage(app);
const category = ['Coffee', 'Non-coffee', 'Dessert'];


const getAllData = async (category) => {
    for (let i = 0; i < category.length; i++) {
        try {
            const storageRef = ref(storage, category[i])
            const data = await listAll(storageRef)
            for (let j = 0; j < data.items.length; j++) {
                try {
                    const downloadURL = await getDownloadURL(data.items[j]);
                    Drink.insert({
                        image: downloadURL,
                        name: data.items[j].name,
                        category: category[i],
                        description: ' ',
                        price: -1
                    })
                } catch (e) {
                    console.log(e)
                }

            }
            console.log('Image retrieved from Firebase Storage and stored in MongoDB');
        } catch (error) {
            console.error('Error retrieving image from Firebase Storage:', error);

        }
    }
}
getAllData(category)

