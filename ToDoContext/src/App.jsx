import { useState,useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  const [todos, setTodos]=useState([]);

  //define functionality

  //addTodo 
  //todo not comes from useState
  const addTodo=(todo)=>{
    //todo is object 
    //we used spread operator here (...)
    setTodos((prevTodos)=>[{
      id:Date.now(),
      ...todo,
    },...prevTodos])
  }

  //updateTodo
  const updateTodo=(id, todo)=>{
    //todos is array we have to add loop on it map is used for loop
    setTodos((prev)=>prev.map((prevTodo)=>(
      //conditional operator
      prevTodo.id===id ? todo : prevTodo
    )))
  }
  //deleteTodo
  const deleteTodo=(id)=>{
    //now we have to create new array 
    //using filter function and the id which is given not in the new array
    //so we get new array without this id
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  //toggleComplete
  const toggleComplete=(id)=>{
    //now we have to go into the todos and using id update the completed:true

    //spread operator for accessing all the values from todos
    setTodos((prev)=>prev.map((prevTodo)=>(
      prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo
    )))
  }

  //now its completed and start local storage

  //hooks that used to renders all the value while page starting is useEffects

  //get item from local storage we have direct access of local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[] )

  //setItem in local Storage 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  


  return (
    <TodoProvider value={{todos, addTodo, updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
