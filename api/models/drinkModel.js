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
    //if not changed it will autoset to -1
    price: {
        type: Number,
        required: true,
        min: -1,
    },
    //if not changed it will autoset to "delicious"
    description: {
        type: String,
        required: true,
        minLength: 0
    },
    category: {
        type: String,
        enum: ['coffee', 'non-coffee', 'dessert'],
        required: true,
        lowercase: true
    }
})

const Drink = mongoose.model('Drink', drinkSchema);
export default Drink;

