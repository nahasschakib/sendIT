

const Parcel =require("../models/pacerel");

//Create Parcel

 const createParcel = async(req,res)=>{
    try{
        const newParcel = Parcel(req.body);
        const Parcel =await newParcel.save();
        res.status(201).json(Parcel)

    }catch(error){
        res.status(500).json(error)
    }
}

// Get All Parcel
 const getAllParcel = async(req,res)=>{
    try{
        const Parcel =await Parcel.find().sort({createdAt:-1});
        res.status(200).json(Parcel);
    }catch(error){
        res.status(500).json(SyntaxError)
    }
}
//UPDATE Parcel

 const updateParcel = async(req,res)=>{
    try{
    const Parcel=await Parcel.findById(req.params.id);
    res.status(201).json(Parcel);
    }catch(error){
    res.status(500).json(error)
}

}
//GET ONE PARCEL

 const getOneParcel = async(req,res)=>{
    try{
        const Parcel =await Parcel.findById(req.params.id);
        res.status(200).json(Parcel);
    }catch(error){
        res.status(500).json(Parcel)
    }
}
//Get Users Parcel
 const getUsersParcel = async(req,res)=>{
    try{
        const Parcel = await Parcel.find({senderemail:req.body.email}).sort({createdAt:-1});

    }catch(error){
        res.status(500).json(error)
    }
}
//DELETE Parcel
 const deleteParcel =async(req,res)=>{
    try{
        const deleteParcel =await Parcel.findByIdAndDelete(req.params.id)
    
    res.status(201).json("Parcel has been deleted successfully")
}catch(error){
    res.status(500).json(error)
}
    };
    
    module.exports={deleteParcel,getUsersParcel,getOneParcel,updateParcel,getAllParcel,createParcel};