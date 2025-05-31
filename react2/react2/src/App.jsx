import { useState } from 'react'
import './App.css'
import './index.css'

import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen bg-black'> 
      
      <form >
        <input className='bg-white rounded' type="text" placeholder='Enter your name' />
        <button className='bg-emerald-600'>Submit</button>
        <button className='bg-yellow-400 rounded-2xl'> Submit2</button>

      </form>
      
    </div>
  )
}

export default App

