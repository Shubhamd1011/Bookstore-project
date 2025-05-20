import React from 'react'
import Courses from '../../components/Courses'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Course() {
  return (
    <>
    <Navbar />

    <div className='min-h-screen'>
          <Courses />
    </div>
    <Footer />
    </>
  )
}

export default Course