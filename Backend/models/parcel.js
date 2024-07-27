const mongoose=require("mongoose");

const ParcelSchema=mongoose.Schema({
    from:{type:String ,require:true},
    to:{type:String,require:true},
    sendername:{type:String ,require:true},
    recipientname:{type:String , require:true},
    senderemail:{type:String,require:true},
    recipientemail:{type:String , require:true},
    weight:{type:Number ,require:true},
    cost:{type:Number , require:true},
    date:{type:String,require:true},
    note:{type:String},
    feedBack:{type:String},
    status:{type:Number ,default:0},
    
},{
    timeStamp:true
});

module.exports=mongoose.model("parcel",ParcelSchema);