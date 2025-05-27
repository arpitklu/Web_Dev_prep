import { useState } from 'react'
import './App.css'
import './index.css'

import React from 'react'


const App = () => {
  return (
    <div>
      <form >
        <input className='px-3 font-semibold py-3 text-xl m-5 rounded' type="text" placeholder='Enter Your Name'/>
        <button className='px-3 py-3 text-xl font-semibold bg-red-600 rounded'> Submit </button>
      </form>
    </div>
  )
}

export default App
