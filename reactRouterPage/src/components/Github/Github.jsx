import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

//in this page we are going to learn some new extra hook and functionality
//we can get data by loader also instead of useEffect and it's more optimized and fast
// useEffect calls when page trying to load 
//but loader is run at tha time of hovering and fetching the data before page load
//it's load fast all the data


//githubInfoLoader is function works like useEffect
//and now use one more functionality or hook useLoaderData

function Github() {

    const data=useLoaderData();
    /* const [data, setData] =useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response=>response.json())
        .then(data=>setData(data))
    },[]) */
  return (
    <div className='text-center m-5 bg-gray-400 text-3xl'>Github followers: {data.followers}
    <div className='flex justify-center items-center m-2'>
        <img  width="350px" src={data.avatar_url} alt="" />
    </div>
    </div>
  )
}

export default Github


//now create new function for loading data it loading fast or fetching data fast

export const githubInfoLoader = async ()=>{
    const response=await fetch("https://api.github.com/users/hiteshchoudhary");
    return response;
    //its a promise
}