import {useState,useEffect} from 'react'

export function Imput(){
    let [count,setCount]=useState(0)

    function handleClick(){
        setCount(count+1)
    }
    useEffect(()=>{
        console.log(count)

    },[count])
    // l array come secondo parametro di useEffect rappresenta le dipendenze
    // al cambiare di [count] , viene eseguita la funzione useEffect

    return(
            <>
            <h2>esercizio</h2>
            <button onClick={handleClick}>count++</button>
            <span>{count}</span>
            </>
        )
}