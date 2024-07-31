const mongoose =require("mongoose");

const ParcelSchema= mongoose.Schema({
    from:{type:String , require:true},
    to:{type:String , require:true},
    senderName:{type:String , require:true},
    recipientName:{type:String , require:true},
    senderMail:{type:String , require:true},
    recipientmail:{type:String , require:true},
    weight:{type:Number , require:true},
    cost:{type:Number , require:true},
    date:{type:String , require:true},
    note:{type:String },
    feedBack:{type:String },
    status:{type:Number , default:0},
    
},{
    timeStamp :true
});
module.exports=("Parcel",ParcelSchema);