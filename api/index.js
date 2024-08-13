import express from "express";

const app= express();

app.listen(3000,()=>{
    console.log('server listening to 3000!')
})

app.get("/new",(req,res)=>{
    res.send("hi bsdk")
})