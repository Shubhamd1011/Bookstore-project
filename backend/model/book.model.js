import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name :String,
  title : String,
  price : Number,
  category : String,
  image : String
})

// We create model of above schema 

const Book = mongoose.model("Book",bookSchema);
export default Book;