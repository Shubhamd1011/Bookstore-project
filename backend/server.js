import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

// Connection with mongodb
try {
  mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true        // when we use atlas on that time we cant use this
  });
  console.log("Connected to MongoDB");
  
} catch (error) {
  console.log("ERROR :",error);
  
}

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
  
})