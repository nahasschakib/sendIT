const express =require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const dotenv= require('dotenv')
const authRoute=require("./routes/auth");
const userRoute=require("./routes/user")

dotenv.config()

const app = express();

//MIDLWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/auth",authRoute)
app.use("/users",userRoute)

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