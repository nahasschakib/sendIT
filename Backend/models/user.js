const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    fullName:{type:String ,require:true},
    email:{type:String ,require:true},
    country:{type:String ,require:true},
    address:{type:String ,require:true},
    password:{type:String ,require:true},
    age:{type:Number},
    role:{type:String ,default:"admin"},
    status:{type:Number ,default:0},
    
},{
    timeStamp :true
});

module.exports=mongoose.model("User",UserSchema);