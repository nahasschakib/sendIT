const mongoose=require("mongoose");

const UserSchema =mongoose.Schema({
    fullname:{type:String ,require:true},
    email:{type:String ,require:true},
    password:{type:String ,require:true},
    age:{type:Number},
    adresse:{type:String ,require:true},
    country:{type:String ,require:true},
    statut:{type:Number ,default:0},
    role:{type:String ,default:"user"},
},{
    timeStamp :true
});

module.exports=("user",UserSchema);