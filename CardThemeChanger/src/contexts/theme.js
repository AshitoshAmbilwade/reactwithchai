import React,{createContext,useContext} from "react";

//we can add para here for already filled value
export const ThemeContext =createContext(
    {
        themeMode:"light",
        darkTheme:()=>{},
        lightTheme:()=>{},
    }
);

//now we have to create provider

export const ThemeProvider =ThemeContext.Provider;

//we can make our custom hook

export default function useTheme(){
    return useContext(ThemeContext);
}

//now we have access of all object from ThemeContext just using useTheme hook

