import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      {/* <p>in this class we are going to start with router in react</p>
      <p>first we have to install it react-router-dom</p>
      <p>creating outlet is important for changing the content</p> 
      <p>now go to main.jsx and import routerProvider, createBrowserRouter, createRoutesFromElements  from react-router-dom</p>
      <p>and import all component here for linking path, element</p>
      */}
      <Header/>
      <Outlet/>
      <Footer/>


    </>
  )
}

export default App
