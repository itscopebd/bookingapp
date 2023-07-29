import express from "express";
const hotelRouter= express.Router();

hotelRouter.get("/", (req,res)=>{
    res.send("Hello Hotel!")
})

 

export default hotelRouter;