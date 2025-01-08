import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, isNumber] = useState("false");
  const [characters, isCharacter] = useState("true");
  const [password, setPassword] = useState("");

  //now it's time for copy password and for that we used useRef hook

  //The useRef hook in React is used to create a mutable object that persists across renders. This object can be used to store information that does not affect the component’s visual output. Here are some key points about the useRef hook:
  //useRef hook
  const passwordRef=useRef(null);

  //now we have to pass ref in input of password
  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password]);





  //we need a function for passwordgenerator
  //for storing the function in cache for re-rendering we used the hook useCallback
  //The React useCallback hook is used to memoize a callback function, ensuring it is only recreated when its dependencies change. This helps prevent unnecessary re-renders of child components by providing a stable reference to the function.
  /* functionName=useCallback(fn, [dependencies])  */

  /* const passwordGenerator=()=>{

  } */

  //const passwordGenerator=useCallback( fn,[length, numbers,characters,setPassword] )

  //fn means function we can used arrow func
  const passwordGenerator = useCallback(() => {
    //now logic for password generating
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //for checking numbers and characters is allowed or not

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*(){}[]?";

    //depend on the length
    //use for loop
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      //simply add it on pass
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  //passwordGenerator(); not possible now useEffect hooks comes in picture
  //The useEffect hook in React is used to perform side effects in functional components, such as fetching data, updating the DOM, and setting up subscriptions or timers.

 // useEffect(callbackfun,dependencies)
  useEffect(()=>{
    //calling function
    passwordGenerator();
  },[length,numbers,characters, passwordGenerator])
  //now it works

  


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-gray-200 m-4">Password Generator</h1>
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label>Length: {length} </label>
          </div>

          {/* numbers */}
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={()=>{
                isNumber((prev)=>!prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>



          {/* characters */}
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={()=>{
                isCharacter((prev)=>!prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
