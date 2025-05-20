import React from 'react'
// import BannerImg from "../../public/assets/bookstore.png"

function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12'>
        <div className='order-2  md:order-1 w-full md:w-1/2 mt-8 mb-5 md:mt-32'>
        <div className='space-y-12'>
          <h1 className='font-bold text-4xl'>Hello, welcome learn something new everyday
          <span className='text-pink-500'> with ShubhBooks📚!!!
          </span>
          </h1>
          <p className='text-xl'>
          Explore a world of knowledge, imagination, and inspiration at ShubhBooks. Whether you're diving into thrilling adventures, discovering new skills, or simply relaxing with a great story — we've got a book for every curious mind. Start your reading journey today!
            </p>
            <label className="input">
  <svg className="h-[1em] opacity-50 outline-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6 12 13 2 6" />
    </g>
  </svg>
  <input type="email" className="grow" placeholder="yourname@example.com" />
</label>
        </div>
        <button className=" mt-5 btn btn-secondary">Submit</button>
        </div>
        <div className='order-1 w-full md:w-1/2'>
        <img src="/assets/bookstore.png" className='md:mt-9 md:ml-9 md:h-150 md:w-150 h-80 w-80 mt-2' alt="" />
        </div>

      </div>
    </>
  )
}

export default Banner