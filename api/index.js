import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGOCONNECT)
    .then(() => {
        console.log('connected');
    }).catch((err) => {
        console.log(err)
    })
const app = express();

app.listen(3000, () => {
    console.log("server runnning on 3000?")
})
app.get('/', (req, res) => {
    res.send('yo')
})