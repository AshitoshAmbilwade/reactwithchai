import { useState } from "react";

import "./App.css";
import Login from "./components/Login";

import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/profile";

function App() {
   

  return (
    <UserContextProvider>
      <div className="w-screen flex   min-h-screen flex-col  text-green-200 p-4  ">
        <h1 className="text-gray-200 text-center text-3xl">
          React context API
        </h1>
        <p className="mt-2  text-center">
          in this video we are going to learn about the context api
        </p>
        <p className="mt-2  text-center">
          context api is used to optimized code instead of props
        </p>
        <p className="mt-2 text-center ">
          The useContext hook in React provides an easy way to share data
          between components without having to pass props manually at every
          level. It allows you to access the value of a context in any
          component,
        </p>
        <p className="mt-2 text-red-500 text-left ml-3 pl-2">
          1. Create a Context: First, you create a context using the
          React.createContext"()" method. This provides a way to define a
          "global" value that can be shared across components.
        </p>
        <p className="mt-2 text-red-500 text-left ml-3 pl-2">
          2. Provide the Context Value: You use the Provider component that
          comes with the context to specify the value of the context. The
          Provider wraps the components that need access to the context.
        </p>
        <p className="mt-2 text-red-500 text-left ml-3 pl-2">
          3. Consume the Context Value: Any component can use the useContext
          hook to access the context's value without passing props.
        </p>
        <Login />
        <Profile />
      </div>
      
    </UserContextProvider>
  );
}

export default App;
