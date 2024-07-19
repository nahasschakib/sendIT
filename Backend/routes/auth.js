const express=require("express");
const router = express.Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const user =require("../models/user")
const dotenv =require("dotenv")

dotenv.config()

//REGISTRATION

router.post("/register",async(req,res)=>{
    const newUser = user({
        fullname:req.body.fullname,
        email:req.body.email,
        age:req.body.age,
        country:req.body.country,
        adress:req.body.adress,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS).toString()
            })
        try{
            const user= await newUser.Save();
            res.status(201).json(user)
        }catch(error){
            res.status(500).json(error)
        }
            
})

//LOGIN


module.exports = router;

