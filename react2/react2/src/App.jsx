import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  

  // const [isOpen, setIsOpen]= useState(false);

  const getData = async ()=>{

    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=8')
    console.log(response)
  }
  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl active:scale-90 cursor-pointer'>Get Data</button>
      
    </div>
  )
}

export default App
