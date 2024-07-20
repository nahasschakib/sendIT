const dotenv =require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const verifyToken=(req,res,next)=>{

if(authHeader){
        const token=authHeader.split("")[1],
        jwtverify=(token,process.env.JWT_SEC, 
            (err,user)=>{
                 if(err)res.status(403).json("Token is not valid")
                req.user =user;
            next();
            }
        );
        
                
}else{
        res.status(401).json("You are not Authenticated")
    }

};

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.role ="admin"){
    
        next()
    } else{
        res.status(403).json("You are not permitted to do this operation")

    }
    })
};

module.exports={verifyToken,verifyTokenAndAuthorization};

