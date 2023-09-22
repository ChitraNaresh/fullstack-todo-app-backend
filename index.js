const express = require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const routes=require("./routes/todoRoute")


require("dotenv").config()

const app=express()

const PORT = process.env.port || 5004

app.use(express.json())
app.use(cors())

mongoose
  .connect(
   process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  app.use(routes)

  app.listen(PORT,()=>console.log("Server is running..."))