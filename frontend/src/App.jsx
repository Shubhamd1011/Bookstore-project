import Course from "./pages/course/Course"
import Home from "./pages/home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import Signup from "./components/Signup"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"
import Login from "./components/Login"



function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    {/* <Home />
    <Course /> */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Course/>:<Navigate to="/signup" />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/login" element={<Login/>}/>                                                            
    </Routes>
          <Toaster />
          {/* This react hot toast we use bcz we want a pop up */}

    </>
    
  )
}

export default App