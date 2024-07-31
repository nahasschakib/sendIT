const Parcel=require("../models/parcel");


//CREATE PARCEL

 const createParcel=async(req,res)=>{
    try{
        const newParcel=Parcel(req.body);
        const Parcel=await newParcel.save();
        res.status(201).json(Parcel)
    }catch(err){
        res.status(500).json(error)
    }
};

//GET ALL PARCEL

 const getAllParcels=async(req,res)=>{
    try{
        const Parcel =await Parcel.find().sort({createdAt:-1});
        res.status(201).json(Parcel);
    }catch(err){
        res.status(500).json(error)
    }
};

//UPDATE PARCEL
 const upDateParcel =async(req,res)=>{
    try{
        const Parcel=await Parcel.findById(req.params.id);
        res.status(201).json(Parcel)
    }catch(err){
        res.status(500).json(error)
    }
};

//GET ONE PARCEL

 const getOneParcel = async(req,res)=>{
    try{
        const pacerel=await Parcel.findById(req.params.id);
        res.status(201).json(Parcel);
    }catch(err){
        res.status(500).json(error)
    }
};
//GET USERS PARCEL

 const getUsersParcel=async(req,res)=>{
    try{
        const Parcel =await Parcel.find({senderemail:req.body.email}).sort({createdAt:-1})
    }catch(err){
        res.status(500).json(error)
    }
};

//DELETE PARCEL

 const deleteParcel =async(req,res)=>{
    try{
        const Parcel=await Parcel.findByIdAndDelete(req.body.id)
        res.status(201).json("Parcel has been deleted successfully")
    }catch(err){
        res.status(500).json(error)
    }
  
};

module.exports={deleteParcel,getUsersParcel,getOneParcel,upDateParcel,getAllParcels,createParcel};