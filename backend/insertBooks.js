// insertBooks.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Book from "./model/book.model.js";

dotenv.config();

const URI = process.env.MONGO_URI;

const __dirname = path.resolve(); // for using ES Modules

const insertData = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");

    // Read the JSON file
    const dataPath = path.join(__dirname, "data", "list.json");
    const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    // Remove old data if needed (optional)
    await Book.deleteMany({});
    console.log("🗑️ Old data removed");

    // Insert new data
    await Book.insertMany(jsonData);
    console.log("✅ New book data inserted successfully");

    process.exit(); // Exit script
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    process.exit(1);
  }
};

insertData();
