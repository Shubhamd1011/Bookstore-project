// We using this context api we for recieving the user from local storage into our api and use it into another component for protect the course compenent.Means some user is logged in or signup on that time only they show the page.
// In children our other components comes ex app.jsx navbar.jsx08 etc

import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext()
function AuthProvider({children}) {
  const initialAuthUser = localStorage.getItem("Users");       //It brings out the user from local storage
  const [authUser,setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  )
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
      {children}

    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) // Here our context api create this bcz we use our user globaly anywhere
export default AuthProvider

