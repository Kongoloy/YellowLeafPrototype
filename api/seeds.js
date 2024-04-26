import Drink from "./models/drinkModel.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
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
// {
//     cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     cardReviews: 2,
//     cardName: "coffee",
//     cardDes: "lorem",
// }

const americano = new Drink(
    {
        image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 2.2,
        name: "americano",
        description: "lorem",
        category: 'coffee'
    }
)
Drink.insertMany([{
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'coffee'
}, {
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'coffee'
}, {
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'coffee'
}, {
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'coffee'
}, {
    image: "https://images.unsplash.com/photo-1644031995386-fe9665dc5b57?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'non-coffee'
}, {
    image: "https://images.unsplash.com/photo-1644031995386-fe9665dc5b57?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'non-coffee'
}, {
    image: "https://images.unsplash.com/photo-1644031995386-fe9665dc5b57?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'non-coffee'
}, {
    image: "https://images.unsplash.com/photo-1644031995386-fe9665dc5b57?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'non-coffee'
}, {
    image: "https://images.unsplash.com/photo-1644031995386-fe9665dc5b57?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'non-coffee'
}, {
    image: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'dessert'
}, {
    image: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'dessert'
}, {
    image: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'dessert'
}, {
    image: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'dessert'
}, {
    image: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.2,
    name: "americano",
    description: "lorem",
    category: 'dessert'
}])
// Drink.save()
try {
    const data = await americano.save()
    console.log(data)
} catch (e) {
    console.log(e)
}

