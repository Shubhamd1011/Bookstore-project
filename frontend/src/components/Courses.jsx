import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


function Courses() {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async () =>{
      try {
      const res = await axios.get("https://bookstore-project-1-bdqd.onrender.com/book")
      setBook(res.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();   // we call the function here

  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 justify-center items-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>
          We're delighted to have you<span className='text-pink-500'> Here! : )</span>     
           </h1>
           <p className='mt-10'>
        Explore our curated collection of book-related courses designed for readers, writers, and literature lovers.
From creative writing and speed reading to publishing your own book, there's something for everyone.
Learn at your own pace with expert guidance and practical lessons.
Start your learning journey today!
           </p>
           <Link to = "/">
                      <button className='cursor-pointer bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 duration-300 mt-6 '>Back</button>
           </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item} page="courses"/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Courses