import React, { useEffect, useState } from 'react'
import axios from 'axios';


const App = () => {

  const [data, setdata] = useState([])

  const getData= async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')

    setdata(response.data)
    console.log(data[0].download_url)
  }
  
  // use useEffect for displaying your data before hand(or without the need of clicking a button to display the data.)
  useEffect(() => {
    getData()
  }, [])
  
  
  return (
    <div className='p-10 h-screen bg-black'>
      {/* <button onClick={getData} className='bg-red-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>get data</button> */}
      <div className='p-5 bg-gray-700'></div>
      {data.map(function(elem, idx){
        return <div key={idx} className='bg-gray-50 text-black items-center justify-between w-full px-7 py-6 rounded mb-3'> 
        <img src= {elem.download_url} alt="" />
        <h1>{elem.author}</h1>

        </div>
      })}
    </div>
  )
}

export default App
