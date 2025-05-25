import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from "./route/book.route.js"


const app = express();

app.use(cors());    // It works likes a Middleware

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

// defining routes
app.use("/book",bookRoute)

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
  
})