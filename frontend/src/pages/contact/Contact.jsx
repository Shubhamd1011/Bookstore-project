import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'; // Make sure this exists or create a simple footer

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen mt-20 mb-5">
        <div className="border px-8 py-10 rounded-md shadow-md">
          <h3 className="font-bold text-lg">Contact Us</h3>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Full Name */}
            <div className='mt-8 space-y-2'>
              <span>Full Name</span><br />
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder='Enter your name'
                className='w-80 px-3 py-1 outline-none border rounded-md mt-3'
              />
              <br />
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Email */}
            <div className='mt-8 space-y-2'>
              <span>Email</span><br />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder='Enter your email'
                className='w-80 px-3 py-1 outline-none border rounded-md mt-3'
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Subject */}
            <div className='mt-8 space-y-2'>
              <span>Subject</span><br />
              <input
                {...register("subject", { required: true })}
                type="text"
                placeholder='Enter subject'
                className='w-80 px-3 py-1 outline-none border rounded-md mt-3'
              />
              <br />
              {errors.subject && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Message */}
            <div className='mt-8 space-y-2'>
              <span>Message</span><br />
              <textarea
                {...register("message", { required: true })}
                placeholder='Enter your message'
                className='w-80 h-32 px-3 py-1 outline-none border rounded-md mt-3 resize-none'
              />
              <br />
              {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Submit Button */}
            <div className='flex justify-center mt-8'>
              <button
                type="submit"
                className='bg-pink-500 text-white px-4 py-1 hover:bg-pink-600 rounded-md duration-200'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
