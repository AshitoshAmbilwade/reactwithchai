import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    //in this page we are going to learn about the useParams
    //userid 
    const {userid}=useParams();
  return (
    <div className='text-gray-700 bg-blue-200 p-5 text-3xl'>User: {userid}</div>
  )
}

export default User