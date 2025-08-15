
import nodemailer from 'nodemailer'
// import dotenv from "dotenv";
// dotenv.config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "anisaidrees191@gmail.com",
        pass: "wxswtvaqxorjcuvi"
    },
});


const _sendEmail = async () => {

    try {
        const info = await transporter.sendMail({
            from: '"COde By Aneesa" <anisaidrees191@gmail.com>',
            to: "owaisraza55670@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?", // plain‑text body
            html: "<b>Hello world?</b>", // HTML body
        });
        console.log("Email sent successfully:", info.response)

    } catch (error) {
        console.error("Email sending failed:", error.message, error);


    }
}

_sendEmail()