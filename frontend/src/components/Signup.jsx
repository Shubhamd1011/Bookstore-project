import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios.post("https://bookstore-project-1-bdqd.onrender.com/user/signup", userInfo, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        toast.success('Signup successfully!!');
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    })
    .catch((err) => {
      console.log(err);
      if (err.response && err.response.data) {
          toast.error("Error: " + err.response.data.message);
      }
    });
  };

  // Handler for X button to navigate home
  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border px-8 py-18 rounded-md shadow-md w-[360px] relative">

          {/* Header with Signup title and X button aligned right */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Signup</h3>
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost text-2xl font-bold"
              aria-label="Close Signup"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span><br />
              <input
                {...register("fullname", { required: true })}
                type="text"
                placeholder='Enter your fullname'
                className='w-80 px-3 py-1 outline-none border rounded-md mt-3'
              />
              <br />
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
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
                className='bg-pink-500 text-white px-3 py-1 hover:bg-pink-600 rounded-md duration-200 cursor-pointer'
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

export default Signup;
