import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Freebook() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-project-1-bdqd.onrender.com/book");
        const data = res.data.filter((data) => (
          data.category === "Free"
        ));
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semiboldbold text-xl pb-2'>
            Learn for Free with ShubhBooks 📘
          </h1>
          <p>
            Get access to a wide range of free books and beginner-friendly courses designed to inspire and educate.
            Whether you're brushing up on skills or exploring something new, we’re here to support your journey — totally free!
          </p>
        </div>

        <div className="slider-container mt-6">
          {book.length > 0 ? (
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item._id} />
              ))}
            </Slider>
          ) : (
            <p className="text-gray-500">Loading free books...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Freebook
