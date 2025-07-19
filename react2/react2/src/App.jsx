import React, { useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {

  const data = useContext(DataContext)

  console.log(data)

  return (
    <div>
      <h1>This is APP {data}</h1>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default App
