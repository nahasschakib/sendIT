const nodemailer =require("nodemailer");
const dotenv =require("dotenv");
const user = require("../../Backend/models/user");

dotenv.config();

function createTransporter(cinfig){
    const transporter =nodemailer.createTransporter(config);
    return transporter;
}
let congiguration ={
    service:"gmail",
    host:"smtp.gmail.com",
    port:587,
    requireTLS:true,
    auth :{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    },
};
const sendMail=async(messageoption)=>{
    const transporter =await createTransporter(congiguration);
    await transporter.verify();
    await transporter.sendMail(messageoption ,(err,info)=>{
        if(err){
            console.log(error)}
            console.log(info)
        }
    );

}
