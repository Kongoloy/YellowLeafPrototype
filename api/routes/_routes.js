import { Router } from "express";
import drinksRouter from "./drinks.route.js";
import adminRouter from "./admin.route.js";

const allroutes = Router();

allroutes.use("/drinks", drinksRouter);
allroutes.use("/admin", adminRouter);

export default allroutes;