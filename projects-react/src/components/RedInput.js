// es 1
// Semplice: scrivere un componente che rappresenti 
// un input text, quando l'input e' vuoto oppure ha
// dentro solo dei numeri, oppure solo della punteggiatura,
// deve avere il bordo rosso.Quando la pagina carica 
// non deve subito partire dal rosso, ma arrivarci
// solo dopo che l'utente ha scritto qualcosa.

import { useState,useEffect } from "react"

export default function RedInput(){
    let [classe,setClass]=useState('') // ho bisogno di gestire la renderizzazione della classe CSS
    // ho bisogno di gestire la renderizzazione del valore
    let [val,setVal]=useState() //inizializzare il value undefined porta un warning
    let symbols=['.',',',';',':','-','_','?','!',"'"]
    let isNumero=!isNaN(val)
    let emptyString=val===''
    
    useEffect(()=>{
        let onlySymbols=()=>{
            if(val && val.length>0){
                for (let i = 0; i < val.length; i++) {
                    const el = val[i];
                    if(!symbols.includes(el)){
                        return false
                    } 
                } 
                return true
            }
            return false
        }

        if(emptyString || isNumero || onlySymbols()){
            setClass('red')
        }else if ( val!=undefined ){
            setClass('green')
        }
    },[val])
    
    return (
        <>
        <input className={classe} value={val} onChange={(e)=>setVal(e.target.value)}></input> 
        </>
    )
}

