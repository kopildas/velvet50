const express = require("express");
const app = express();
const cors = require("cors");
const { port, dbConnect } = require("./config/config");

app.use(cors());
app.use(express.json());


app.listen(port, async()=>{
    console.log(`Server running on port ${port}`);
    await dbConnect();
})
