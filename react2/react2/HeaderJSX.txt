//REACT-ROUTER-DOM
// Step-1: Wrap your app inside BrowserRouter
// Step-2: Make a "Routes tag" and then make a "Route tag" and store all the Routes. 
// Step-3: Create a Header.jsx file which contains the details
// Step-4: in your app.jsx file use "Link" tags to link them to their respective components that are there in the Header.jsx file. 

// #Note:
// instead of "Link" tags we can also use "a" tags but "a" tags reload the entire page while performing any operation but, on the other hand "Link" tags do not reload the entire page while performing any operation.


import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Header = () => {

    
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl' >Arppit's Web Page</h2>
        <div className='flex gap-8 text-lg underline'>
            {/* "a" tags are efficient and works fast but still it reloads the entire page to perform any operation. */}
            {/* <a className='text-xl underline' href="/">Home</a>
            <a className='text-xl underline' href="/about">About</a>
            <a className='text-xl underline' href="/contact">Contact</a>
            <a className='text-xl underline' href="/home">Home</a>
            <a className='text-xl underline' href="/product">Product</a> */}

            {/* ###################################################################################################### */}
            {/* to over-come reloading of the pages, we use "Link" tags. */}

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Header
