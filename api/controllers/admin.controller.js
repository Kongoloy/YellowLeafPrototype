import bcrypt from "bcrypt";
import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";
import { handleError } from "../utils.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../index.js";
dotenv.config();

const authenticate = async (req, res, next) => {
    try {
        const { passwordLogin } = req.body;
        const codeObj = await Admin.findOne();
        const { code } = codeObj;

        const validPasswordLogin = await bcrypt.compare(passwordLogin, code);
        const validFirebaseLogin = await signInWithEmailAndPassword(auth, process.env.Firebase_admin_email, passwordLogin);
        if (!(validPasswordLogin && validFirebaseLogin)) {
            return next(handleError(401, 'Unauthorized'));
        }

        const token = jwt.sign({ id: codeObj._id }, process.env.JWT_SECRET, { expiresIn: '20m' });
        res.cookie('access_token', token, {
            withCredentials: true,
            secure: true,
            httpOnly: true,
        });
        res.status(204).end();

    } catch (err) {
        console.error('Error during authentication:', err);
        return next(handleError(500, 'Internal Server Error'));
    }
}


export default authenticate;
