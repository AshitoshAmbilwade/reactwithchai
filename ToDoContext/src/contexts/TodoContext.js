import React, { createContext, useContext } from "react";

//1st create context
export const TodoContext = createContext(
    {
    /* default value */
    todos:[
        //todo is array of object
        /* {},{},{} */
        //example object
        
    ],
    //functionality name
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

    },
);

// 2nd provider
export const TodoProvider = TodoContext.Provider;

//3rd custom hook
export const useTodo = () => {
    return useContext(TodoContext);
};
