import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
