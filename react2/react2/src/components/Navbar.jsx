import React, { useState } from 'react'
import Nav2 from './Nav2'

const Nabar = () => {

  const [Mouse, setMouse] = useState(false)
  function handleMouseEnter(){
    setMouse(true)
  }
  function handleMouseLeave(){
    setMouse(false)
  }

  return (
    <nav className='bg-emerald-600 flex py-5 items-center justify-between'>
      <h2 className='py-2 px-3 text-2xl font-extrabold text-amber-400'>Login</h2>
      <h2 className='py-2 px-3 text-2xl font-extrabold text-amber-400'>Signup</h2>
      <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='py-2 px-3 text-2xl font-extrabold text-amber-400'>Home</h2>
      {
        Mouse ? <div>Mouse is hovered</div> : <div></div>
      }
      <Nav2/>
    </nav>
  )
}

export default Nabar
