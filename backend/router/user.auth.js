const express = require("express");
const { email } = require("../controller/auth/email");
const userRouter = express.Router();

userRouter.post("/email-verification", email); //email verification routes

module.exports= {userRouter};