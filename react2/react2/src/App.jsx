import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer' 

const App = () => {
  return (
    
    <>
      <div className='bg-black h-screen'>
        <Navbar /> {/* this is a component*/}
        <Footer/>
      </div>
    </>
  )
}

export default App
