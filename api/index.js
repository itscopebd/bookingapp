import express from 'express';
const app= express();
import mongoose from 'mongoose';
import authRouter from "./routers/auths.js"

import dot from 'dotenv'
import hotelRouter from './routers/hotels.js';
import roomRouter from './routers/rooms.js';
import usersRouter from './routers/users.js';
dot.config()


app.get("/",(req,res)=>{
    res.send("Server Running! ")
})


app.use("/auth",authRouter)
app.use("/hotel",hotelRouter)
app.use("/room",roomRouter)
app.use("/users",usersRouter)


const connect= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connect Mongo")
    } catch(error){
        throw error;
    }
}





app.listen(4000,()=>{
    connect()
    console.log("Server is Running!........")
})