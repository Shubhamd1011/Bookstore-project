import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // ✅ Load env variables at the top

const app = express();
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
