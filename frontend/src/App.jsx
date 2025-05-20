import Course from "./pages/course/Course"
import Home from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import Signup from "./components/Signup"


function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}

    <Routes>
      <Route path="/" element={<Home/>}/>
            <Route path="/course" element={<Course/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                                    <Route path="/about" element={<About/>}/>
                                                                        <Route path="/signup" element={<Signup/>}/>

    </Routes>
    </>
    
  )
}

export default App