const express= require('express');
const router=express.Router();
const {createParcel,getAllParcels,upDateParcel,getOneParcel,getUsersParcel,deleteParcel}=require("../controllers/parcel")

//AD PARCEL

router.post("/",createParcel);

//GET ALL PARCEL
router.get("/",getAllParcels);

//UPDATE PARCEL
router("/:id",upDateParcel);

//GET ONE PARCEL

router.get("/find/:id",getOneParcel)

//GET USERS PARCEL

router.post("/me", getUsersParcel)

//DELETE PARCEL
router.delete("/id",deleteParcel)

module.exports=router;