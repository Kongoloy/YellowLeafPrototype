import { Router } from "express"
import getDrinks from "../controllers/drinks.controller.js";

const drinksRouter = Router();

drinksRouter.get('/all', getDrinks);


export default drinksRouter;