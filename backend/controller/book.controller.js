import Book from "../model/book.model.js";

export const getBook = async (req,res)=>{
  try {
    const book = await Book.find()  // async await bcz sometimes it takes time to take data from db so it is asynchronus
    res.status(200).json(book)
  } catch (error) {
    console.log("ERROR: ",error);
    res.status(500).json(error)
  }
}