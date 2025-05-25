import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const [authUser, setAuthUser] = useAuth()
  const navigate = useNavigate();

  function handleLogout() {
    try {
      setAuthUser({
        ...authUser,
        user: null // Clear user from context
      })
      localStorage.removeItem("Users")
      toast.success("Logout successfully!!")

      // Wait 2 seconds, then redirect
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      toast.error("Error: " + error.message)
    }
  }

  return (
    <>
      <button
        className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  )
}

export default Logout
