import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,

  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error: ", error);
  } else {
    console.log("SMTP Server is ready to take messages");
  }
});


export default transporter