import Drink from "../models/drinkModel.js";

async function getDrinks(req, res) {
    const data = await Drink.find()
    const category = Drink.schema.path('category').enumValues
    res.send({ data, category })
}

export default getDrinks;