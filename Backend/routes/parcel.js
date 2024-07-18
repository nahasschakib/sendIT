const express = require("express");
const router = express.Router();
const {createParcel, getOneParcel, getAllParcel, updateParcel, getUsersParcel, deleteParcel} = require("../controllers/parcel")

//ADD Parcel
router.post("/",createParcel)

//GET ALL Parcel
router.get("/",getAllParcel);

//UPDATE Parcel
router.put("/",updateParcel)

//GET ONE Parcel
router.get("/find/:id",getOneParcel)

//GEY USERS Parcel
router.post("/me",getUsersParcel)

//DELETE Parcel
router.delete("/id",deleteParcel)


module.exports=router;