const nodemailer = require("nodemailer");
const { clientURL, SMTP_USER, SMTP_PASS } = require("../../config/config");
const { jwtToken } = require("./auth");
const emailData = (email)=>{
    const token = jwtToken({email: email}, "10m");
    return {
        email: email,
        subject : "Account activation email",
        html : `
        <h1>Welcome to Velvet 50!</h1>
        <p>Please click here to <a href="${clientURL}/auth/email-activation/${token}" target="_blank">activate your account</a> </p>
        `
    }
}
const email = async(req, res)=>{

}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

module.exports= {email};