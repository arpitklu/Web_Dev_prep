import React, { useState } from 'react'
import axios from 'axios';


const App = () => {

  const [data, setdata] = useState([])

  const getData= async ()=>{

    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setdata(response.data)
    // console.log(data)
  }
  
  return (
    <div className='p-10 h-screen bg-black'>
      <button onClick={getData} className='bg-red-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>get data</button>
      <div className='p-5 bg-gray-700'></div>
      {data.map(function(){
        return <h1>Hello</h1>
      })}
    </div>
  )
}

export default App
