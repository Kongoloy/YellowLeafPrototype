import { Router } from "express"
import { verificationMiddleware, multerMiddleware, addData, verified } from "../controllers/controls.controller.js";

const controlsRouter = Router();

controlsRouter.get('/', verificationMiddleware, verified)
controlsRouter.post('/new', verificationMiddleware, multerMiddleware, addData)
controlsRouter.put('/update', verificationMiddleware,)



export default controlsRouter;