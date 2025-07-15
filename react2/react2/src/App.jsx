import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/product' element={<Product />}/>

      </Routes>
    </div>
  )
}

export default App
