import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import UserContext from './context/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContext>
      <App />

    </UserContext>
    
)
