require("dotenv").config();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");

const dbConnect = async()=>{
    try{
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wxzkvmx.mongodb.net/velvet50?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(uri);
        console.log("MongoDB connected...");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports= {port, mongoose, dbConnect};