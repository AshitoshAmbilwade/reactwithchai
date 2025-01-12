import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext';
function Login() {
    const [username, setUsername]=useState('');
    const [password, setPassword] = useState('');

    //setUser is from userContextProvider
    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
      e.preventDefault()
      setUser({username,password})
    }
  return (
    <div  >
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'
        className='bg-transparent border rounded-lg text-green-600 p-1 m-2'
        />

        <input type="password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' 
        className='bg-transparent border rounded-lg text-green-600 p-1 m-2'
        />
        
        <button onClick={handleSubmit} className='border p-2 rounded-lg hover:bg-green-300 hover:text-black'>Submit</button>
    </div>
  )
}

export default Login