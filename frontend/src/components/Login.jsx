import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {

  // for form validation i used react hook form.
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
<button
  type="button"
  onClick={() => document.getElementById('my_modal_3').close()}
  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
>
  ✕
</button>

            <h3 className="font-bold text-lg">Login</h3>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
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
              <span>Password</span>
              <br />
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
            <div className='flex justify-around mt-8'>
              <button className='bg-pink-500 text-white px-3 py-1 hover:bg-pink-600 rounded-md duration-200'>
                Login
              </button>
              <p>
                Not registered?
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Login
