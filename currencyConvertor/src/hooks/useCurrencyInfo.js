import React, { useEffect, useState } from "react";

// our hook will take the argument known as currency

//here we just want to call an API for currency data
function useCurrencyInfo(currency) {
    const [data, setData]=useState({})

    //we used useEffect hook when we want to mount, something or triggered the lifecycle of the something
    //we need two arguments first callback fun, set of dependencies
    //by fetching API we get callback in first then
    //now we get res data in json
    //we need to hook to store data in state

    


    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))

        console.log(data);
    }, [currency]);

    //now we have to return data
    return data;
}

export default useCurrencyInfo;
