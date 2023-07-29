import express from "express";
const usersRouter= express.Router();

usersRouter.get("/", (req,res)=>{
    res.send("Hello Users!")
})

 

export default usersRouter;