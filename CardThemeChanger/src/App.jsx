import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode,setThemeMode]=useState("light");

  //now we have to make method with same name of value
  const lightTheme=()=>{
    setThemeMode("light");
  }

  const darkTheme=()=>{
    setThemeMode("dark");
  }

  //actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    /* use themeProvider for wrap now we have to pass values also */
    /* now we have direct access of all this value themeMode, lightTheme, darkTheme */
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme Btn */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
