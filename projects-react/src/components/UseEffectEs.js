import {useState,useEffect} from 'react'
//nello specifico useEffect
export function ImputUseEffect(){
    let [inputA,setImputA]=useState()
    let [inputB,setInputB]=useState()
    let [testo,setTesto]=useState('')
    
    useEffect(()=>{
        if(inputA && inputB){
            setTesto('funziona')
        }
    },[inputA,inputB])

    return(
            <>
            <h2>esercizio</h2>
            <input value={inputA} onChange={(e)=>setImputA(e.target.value)}></input>
            <input value={inputB} onChange={(e)=>setInputB(e.target.value)}></input>
            <span>{testo}</span>
            </>
        )
}