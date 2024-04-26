import mongoose from "mongoose";

const drinkSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minLength: 0
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    description: {
        type: String,
        required: true,
        minLength: 0
    },
    category: {
        type: String,
        enum: ['coffee', 'non-coffee', 'dessert'],
        required: true
    }
})

const Drink = mongoose.model('Drink', drinkSchema);
export default Drink;

