import React from 'react'

function Cards({ item, page }) {
  // console.log(item);

  // Change image only if it's the Courses page
  const imageUrl = page === 'courses' ? '/assets/Course.jpg' : item.image;

  return (
    <>
      <div className='mt-4 mb-4 flex justify-center items-center hover:scale-105 duration-200'>
        <div className="card bg-base-100 w-92 shadow-sm border-[1px] flex justify-center items-center">
          <figure>
            <img
              src={imageUrl}
              alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="py-0.5 px-4 border-[1px] rounded-full hover:bg-pink-500 duration-300">${item.price}</div>
              <div className="py-1 px-2 border-[1px] rounded-full hover:bg-pink-500 duration-300">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
