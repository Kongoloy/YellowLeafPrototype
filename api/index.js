import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import allroutes from "./routes/_routes.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const firebase = initializeApp({
    apiKey: process.env.Firebase_apiKey,
    authDomain: process.env.Firebase_authDomain,
    projectId: process.env.Firebase_projectId,
    storageBucket: process.env.Firebase_storageBucket,
    messagingSenderId: process.env.Firebase_messagingSenderId,
    appId: process.env.Firebase_appId,
    measurementId: process.env.Firebase_measurementId,
});

const auth = getAuth(firebase)
async function main() {
    try {
        await mongoose.connect(process.env.MONGOCONNECT)
        console.log('MONGO CONNECTED');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
main().catch(err => console.log(err));

const PORT = process.env.PORT || 5050

app.use(cookieParser())
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        process.env.WEBSITE_ADDRESS
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    res.setHeader("Access-Control-Max-Age", 7200);

    next();
});
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message,
    })
})
app.use("/api/", allroutes)

app.listen(PORT, () => {
    console.log(`server runnning on ${PORT}`)
})

export { app, auth };