import React, { useState } from 'react'

const App = () => {

  const [isOpen, setIsOpen]= useState(false);

  const getData=()=>{
    setIsOpen(true);
    console.log("hellow!!")
  }
  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl active:scale-90 cursor-pointer'>Get Data</button>
      {/* {
        isOpen ?
        <div className='p-5 bg-gray-900 text-amber-50'>hello</div>
        :
        <div></div>
      } */}
    </div>
  )
}

export default App
