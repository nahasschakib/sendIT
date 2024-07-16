const express =require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const dotenv= require('dotenv')

dotenv.config()

const app = express();

//MIDLWARE
app.use(cors())

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