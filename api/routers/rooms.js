import express from "express";
const roomRouter= express.Router();

roomRouter.get("/", (req,res)=>{
    res.send("Hello Room!")
})

 

export default roomRouter;