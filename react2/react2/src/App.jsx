import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

import Product from './pages/Product';
import Navbar from './components/Navbar';
import Header from './components/Header';


const App = () => {
  return (
    <div>
      
      {/* <Navbar>

      </Navbar> */}

      <Header>

      </Header>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/product' element={<Product />}/>

      </Routes>
    </div>
  )
}


export default App
