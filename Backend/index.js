const express =require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const dotenv= require('dotenv');
const authRoute=require("./routes/auth");
const userRoute=require("./routes/user")
const ParcelRoute =require("./routes/parcel")

dotenv.config()

const app = express();

//MIDLWARE
app.use(cors())


// ROUTE
app.use("/Api/V1/auth",authRoute)
app.use("/Api/V1/users",userRoute)
app.use("/Api/V1/Parcel",ParcelRoute)


//DATABASE CONNECTION
const DB=process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("DB connection is successful");
}).catch((err)=>{
    console.log("err")
})


//SERVER
const PORT= process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})