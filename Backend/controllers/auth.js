const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const user =require("../models/user");
const dotenv =require("dotenv");

dotenv.config()

 const registerUser= async (req,res)=>{
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
}

 const loginUser =async (req,res)=>{
    try{const user = await user.findOne({email:req.body.email});
    if(!user){
        return res.status(401).json("You have not enregistred");
    }
    const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS)
    const originalPassword =hashedPassword.toString(CryptoJS.enc.Utf8);
    if(originalPassword !== req.body.password){
        return res.status(500).json("Wrong Passwors");
    }
    const{password,...info} = user._doc;
    const accessToken = jwt.sign(
       {id:user._id,role:user.role},
       process.env.JWT_SEC,
       {expireIn:"10d"} )
       res.statuts(200).json({...info,accessToken})
    }catch(error){
        res.statuts(500).json(error)
    }
};

module.exports={registerUser,loginUser};