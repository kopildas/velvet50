const express = require("express");
const app = express();
const cors = require("cors");
const { port, dbConnect } = require("./config/config");
const { userRouter } = require("./router/user.auth");

app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);


app.listen(port, async()=>{
    console.log(`Server running on port ${port}`);
    await dbConnect();
})
