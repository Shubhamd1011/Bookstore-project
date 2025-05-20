import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border px-8 py-18 rounded-md shadow-md">
          <h3 className="font-bold text-lg">Signup</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className='mt-12 space-y-2'>
              <span>Name</span><br />
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder='Enter your fullname'
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

            {/* Password */}
            <div className='mt-8 space-y-2'>
              <span>Password</span><br />
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder='Enter your password'
                className='w-80 px-3 py-1 outline-none border rounded-md mt-3'
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-pink-500 text-white px-3 py-1 hover:bg-pink-600 rounded-md duration-200'
              >
                Signup
              </button>
              <p>
                Have account?
                <button
                  type="button"
                  className='underline text-blue-500 cursor-pointer ml-1'
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>

          {/* Login Modal */}
          <Login />
        </div>
      </div>
    </>
  )
}


export default Signup
