import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

/* for create-react-app we need 
 REACT-APP as prefix for variable name in env
and to access we need process.env.varname

 and for vite we need VITE as prefix
 to access we need import.meta.env.VITEVARNAME
 */

 console.log(import.meta.env.VITE_APPWRITE_URL);
 

  return (
    <>
      <h1 className="text-3xl font-bold ">
      Hello world!


      
    </h1>
    </>
  )
}

export default App
