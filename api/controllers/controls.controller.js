import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import Drink from "../models/drinkModel.js";
import { handleError } from "../utils.js";
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { capFirstLetter } from "../utils.js";
import multer from "multer";
dotenv.config()
const verificationMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.access_token
        if (!token) {
            return next(handleError(401, 'Unauthorized'))
        }
        jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
            if (err) {
                return next(handleError(400, 'Bad Request'))
            } else {
                next();
            }
        })
    } catch (err) {
        return next(handleError(500, 'Internal Server Error'));
    }
}
const verified = (req, res) => {
    try {
        res.status(204).end()
    } catch (err) {
        return handleError(500, 'Internal Server Error')
    }
}

const multerMiddleware = (req, res, next) => {
    const multerValidate = multer({
        storage: multer.memoryStorage(),
        // limits: { fileSize: 1000000 }
    }).single('image')

    multerValidate(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return next(handleError(400, `File size too large`))
        } else if (err) {
            return next(handleError(500, `Internal Server Error`))
        }
        next();
    })
}
const uploadImageandGetURL = async (image, name, category) => {
    try {
        const storage = getStorage();
        const imageBuffer = image.buffer;
        const imageMimeType = image.mimetype;
        const metaData = {
            contentType: imageMimeType,
        }
        const storageRef = ref(storage, `${capFirstLetter(category)}/${name}.jpg`);
        await uploadBytesResumable(storageRef, imageBuffer, metaData);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (err) {
        throw new Error(`Error uploading image to Firebase Storage: ${err.message}`);
    }
}
const uploadEverythingToMongoDB = async (url, name, price, description, category) => {
    try {
        const newDrink = new Drink({
            image: url,
            name: name,
            price: price,
            description: description,
            category: category,
        })
        const data = await newDrink.save();
    } catch (err) {
        return handleError(400, 'Bad Request');
    }
}
const addData = async (req, res) => {
    const image = req.file;
    const { name, price, description, category } = req.body;
    try {
        const url = await uploadImageandGetURL(image, name, category)
        uploadEverythingToMongoDB(url, name, price, description, category)
        res.status(204).end()
    } catch (err) {
        return handleError(400, 'Bad Request')
    }
}
export { verificationMiddleware, verified, multerMiddleware, addData };