//~ 1- Creating a custom hook

//! we named this file as js because hooks mainly are pure js code
//^ Custom hooks are nothing but mainly js funcitons

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({})    //* initally set as empty object {} because if somehow we didn't get the data from api and we try to loop it so it won't effect 

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.8.21/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])

    console.log(data)
        return data
}

export default useCurrencyInfo;

