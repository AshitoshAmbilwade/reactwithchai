import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState ={
    todos:[{id:1, text:"hello world"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    /* now reducer */
    reducers:{
        /* properties:function */
        /* but here we want definition  of the methods*/
        addTodo:(state, action)=>{
            //todo comes from state
            const todo={
                id:nanoid(),
                /* payload is object we can access using . */
                text:action.payload,
            }

            /* now we have to update the state */
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        
    }
});

/* now we have to export second part */
export const {addTodo,removeTodo}=todoSlice.actions;

export default todoSlice.reducer