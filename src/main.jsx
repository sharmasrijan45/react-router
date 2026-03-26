import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Rute from './Rute.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubloader } from './components/Github/Github.jsx'
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
      },
      {
        path : "contact",
        element : <Contact />
      } , 
      {
        path : "user/:id" , 
        element : <User />
      },
      {
        loader : githubloader ,
        path : "github",
        element : <Github />
      }
    ]
  }
])

// we have an another attribute called loader with path and element 
//loader is used for something like API calls etc to optimize  == when cursor is on the button or any link before clicking it start invoking or fetching data and also store in cache
// hook is used to use it
{/*   this is a comment  */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router} /> 
  </StrictMode>,
)
