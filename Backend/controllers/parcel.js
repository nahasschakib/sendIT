const Parcel=require("../models/pacerel");
const {}=require("../controllers/parcel")

//CREATE PARCEL

export const createParcel=async(req,res)=>{
    try{
        const newParcel=Parcel(req.body);
        const Parcel=await newParcel.save();
        res.status(201).json(Parcel)
    }catch(err){
        res.status(500).json(error)
    }
};

//GET ALL PARCEL

export const getAllParcels=async(req,res)=>{
    try{
        const Parcel =await Parcel.find().sort({createdAt:-1});
        res.status(201).json(Parcel);
    }catch(err){
        res.status(500).json(error)
    }
};

//UPDATE PARCEL
export const upDateParcel =async(req,res)=>{
    try{
        const Parcel=await Parcel.findById(req.params.id);
        res.status(201).json(Parcel)
    }catch(err){
        res.status(500).json(error)
    }
};

//GET ONE PARCEL

export const getOneParcel = async(req,res)=>{
    try{
        const pacerel=await Parcel.findById(req.params.id);
        res.status(201).json(Parcel);
    }catch(err){
        res.status(500).json(error)
    }
};
//GET USERS PARCEL

export const getUsersParcel=async(req,res)=>{
    try{
        const Parcel =await Parcel.find({senderemail:req.body.email}).sort({createdAt:-1})
    }catch(err){
        res.status(500).json(error)
    }
};

//DELETE PARCEL

export const deleteParcel =async(req,res)=>{
    try{
        const Parcel=await Parcel.findByIdAndDelete(req.body.id)
        res.status(201).json("Parcel has been deleted successfully")
    }catch(err){
        res.status(500).json(error)
    }
  
};

module.exports={deleteParcel,getUsersParcel,getOneParcel,upDateParcel,getAllParcels,createParcel};