import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Drink from "./models/drinkModel.js";
import cors from "cors";
const app = express();
dotenv.config();

async function main() {
    try {
        await mongoose.connect(process.env.MONGOCONNECT)
        console.log('MONGO CONNECTED');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
main().catch(err => console.log(err));
const PORT = process.env.PORT || 5050

app.use(cors())
// app.use(express.json())

app.get('/drinks', async (req, res) => {
    const data = await Drink.find()
    const category = Drink.schema.path('category').enumValues
    res.send({ data, category })
})

app.listen(PORT, () => {
    console.log(`
    server runnning on ${PORT}`)
})

