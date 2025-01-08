import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//now we have to create router function
//we have two method for creating this 
//1st

/* const router =createBrowserRouter([
  //now we have to give object for linking
  {
    path:'/',
    element:<App/>,
    //we can give children
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },{
        path:"contact",
        element:<Contact/>
      }
    ]
  }
]) */

  //second method is using Route and createRoutesFromElements
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        {/* //now create self closing route */}
        
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='user/:userid' element={<User/>} />
        <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github/>} />
        
      </Route>
    )
    )

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>,
)
