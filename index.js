import nodemailer from "nodemailer";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: true,
        port: 587,

        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        }
    }
);


const mailoption = {
    from: {
        name: process.env.NAME,
        address: process.env.USER,
    },
    to: process.env.TOEMAIL
    ,
    subject: "Forgot Password Of Amazon",
    text: "Enter new password ",
    html: fs.readFileSync("./forgotpass.html"),

}
transporter.sendMail(mailoption, async (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response)

    }
});





