import React, { useState } from 'react'

const App = () => {

  const [isOpen, setIsOpen]= useState(false);

  const getData=()=>{
    setIsOpen(true);
    console.log("hellow!!")
  }
  return (
<<<<<<< HEAD
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl active:scale-90 cursor-pointer'>Get Data</button>
      {/* {
        isOpen ?
        <div className='p-5 bg-gray-900 text-amber-50'>hello</div>
        :
        <div></div>
      } */}
=======
    <div className='p-10 '>
      <button className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
      <div className='p-5 bg-white '>Hello</div>
>>>>>>> fa354e52e4b030cd619a66fe239f346f68994428
    </div>
  )
}

export default App
