import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Rute from './Rute.jsx'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Rute />,
    children : [

      {
        path : "home",
        element : <Home />
      } ,
      {
        path : "about",
        element : < About />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router} /> 
  </StrictMode>,
)
