

const user =require("../models/user")


//DELETING USER

 const deleteUser= async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id);
        res.status(201).json("The user has been deleted successfully")
    }catch(error){
        res.status(500).json(error)
    }
}
//GET ALL USERS

 const getAllUsers=async(req,res)=>{
    try{
        const users =await users.find().sort({createdAt:-1});
        res.status(200).json(error)
    }catch(error){
        res.status(500).json(error)
    }
};

module.exports={deleteUser,getAllUsers};