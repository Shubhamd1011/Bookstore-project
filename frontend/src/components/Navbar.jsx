import React, { useEffect, useState } from 'react'
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

function Navbar() {

    const [authUser,setAuthUser] = useAuth();
  const [sticky,setSticky] = useState(false);
  useEffect (()=>{
    const handleScroll = ()=>{
      if(window.scrollY>0){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }

  },[])
  const navItems = (
    <>
    <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/course'>Course</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
      <li>
        <a href='/about'>About</a>
      </li>
    </>
  )
  return (
    <>
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 ${
      sticky?"sticky-navbar z-50 shadow-md bg-base-300 duration-300 ease-in-out transition-all" : ""
    }`}>
      {/* This Navbar taken by daisy ui */}
      <div className="navbar  shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {navItems}     
      </ul>
    </div>
    <a href='/' className=" text-2xl font-bold cursor-pointer hover:text-pink-500 duration-300">ShubhBooks</a>
  </div>
  <div className='navbar-end space-x-3'>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className='hidden md:block '>
    <label className="flex items-center justify-around gap-2 border py-2 px-3 rounded-md">
        <input type="search" className="flex items-center grow outline-none" placeholder="Search" />
  <svg className="h-[1em] opacity-50 outline-none " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
</label>
  </div>
  {
    authUser ? (<Logout/>) :(
     <div>
    <a className="btn bg-pink-500 text-white px-4 py-1.5 rounded-md hover:bg-pink-600 duration-300 cursor-pointer"
    onClick={()=> document.getElementById("my_modal_3").showModal()} 
    >Login</a>
    <Login />
  </div> )
  }
 
 
</div>
</div> 
    </div>
    </>
  )
}

export default Navbar