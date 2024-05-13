import { Router } from "express"
import authenticate from "../controllers/admin.controller.js";
import controlsRouter from "./controls.route.js";
const adminRouter = Router();

adminRouter.use('/controls', controlsRouter)
adminRouter.post('/auth', authenticate)


export default adminRouter;