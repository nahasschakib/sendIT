const express=require("express");
const app =express();
const dotenv=require("dotenv");
const cron =require("node-cron");
const mongoose=require("mongoose");

dotenv.config();

//DB CONNECTION
const Db=process.env.DB;
mongoose.connect(Db).then(()=>{
    console.log("DB connection is successful")
}).catch((err)=>{console.log(err)});

// TASK SCHUDLER
const run = ()=>{
    cron.schedule('* * * * *', () => {
        
      });
}
run();

//PORT
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`BackgoundServices is running on port ${PORT}`)
})