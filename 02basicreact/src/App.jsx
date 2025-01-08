import { useState } from 'react'
import './App.css'

function App() {
  //use hook
  //state change karne me kaam aata hai
  //do chizhe milte hai
  const [counter, setCounter]= useState(10);
  //var counter=10;
  
  const addValue=()=>{
    //console.log("add value")
    //counter=counter+1;
    
    //setCounter(counter+1);


    //console.log(counter);
    //increase to ho raha hei lekin update nahi ho raha hai counter value me
    //yaha pe aata he hooks
    //problem aa rahi UI updation me


    /* interview main point */


    /*  setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);
 */

    //instead of incrementing 3 times it will increment only 1
    //because useState takes it as batch and process at the one time like a one operation
    //because our fibre diffing algo has more control on this


    //but for incrementing 3 times we need to used different method 
    //prevCounter gives you existing value of useState
    setCounter((PrevCounter)=>PrevCounter+1);
    setCounter((PrevCounter)=>PrevCounter+1);
    setCounter((PrevCounter)=>PrevCounter+1);
    //now we can update three times increment by one click
    //by using callback function it will take it separately

  }

  const removeValue=()=>{
    //no need less than 0
    if(counter>0){
      setCounter(counter-1);
    }else{
      alert("value is 0");
    } 

  }
  return (
    <>
    <h1>Counter app learning hooks</h1>
    <h2>Counter value: {counter}</h2>
    <div className='buttons'>
    <button onClick={addValue} >add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </div>

    </>
  )
}

export default App
