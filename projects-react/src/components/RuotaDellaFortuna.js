// ----------------------------------------
// es 3
// todo list (lezione)

import { useEffect, useState } from "react";

// ----------------------------------------
// es 4
// tic tac toe ( vedi documentazione,fermarsi a adding travel?)

// ----------------------------------------
// es 5
// ping pong

// ----------------------------------------
// es 6
// excel semplice
// si richiede di creare un componente che sia la versione estremamente semplificata di una riga di Excel. Si devono creare n input dove n e' una prop, ogni qualvolta un input cambia si deve salvare nello stato:
//  * il numero totale di celle che hanno un valore al loro interno
//  * un array con tutti i valori nelle celle

// ----------------------------------------
// utilizzo di librerie non viste in classe:
// es 7 
// si richiede di creare una applicazione React che sfrutti React Router.
// A sinistra deve esserci un menu di navigazione, e in centro il dettaglio del componente attuale, quando cliccate una voce del menu a sx, il dettaglio cambia.
// es 8
// scrivere un applicazione frontend che interroghi le api di gpt3, basta che ci sia la possibilita' di scrivere una domanda e ottenere una risposta.

// ----------------------------------------
// es 9
// ruota
// Secondo esercizio: Scrivere una applicazione che
// si avvicini piu' possibile al concetto di "ruota della fortuna",
// quindi deve esserci una "ruota" (che puo' anche non avere
// l'aspetto di una ruota, basta che si vedano diversi valori
// selezionati di volta in volta... per arrivare ad uno solo finale),
//  e deve esserci uno storico dei valori usciti.

function Ruota({numeri,evidenziato}){
    return (
        <div>
            <ul>
                {numeri.map((num,i)=>{
                    return(
                        <li key={i} className={evidenziato==i?'focus':''}> {num} </li>
                        )
                    })}
            </ul>
        </div>
    )
}

function Result({magicNumber}){
    // let [res,setRes]=useState()
    // useEffect(()=>{
    //     setRes(numeroFortunato)
    // },[numeroFortunato])

    return(
        <div>
            <h1 className="magicNumber"> {magicNumber} </h1>
        </div>
    )
}

function Storico({storico}){
    return(
        <span>Storico numeri: 
            {storico.map((oldNum,i)=> <span key={i}> {oldNum} </span>)} 
        </span>
    )
}

export default function RuotaDellaFortuna(){
    let numeri=[1,2,3,4,5,6,7,8,9,10]
    let [numeroFortunato,setNumeroFortunato]=useState()
    let [storico,setStorico]=useState([])
    let [index,setIndex]=useState()
    let [evidenziato,setEvidenziato]=useState()
    let [magicNumber,setMagicNumber]=useState()
    
    function handleClick(numeri,setNumeroFortunato){
        let i=Math.floor(Math.random()* numeri.length)
        let newFortunato=numeri[i]
        setNumeroFortunato(newFortunato)
        setIndex(i)
        console.log('click');
    }
    
    useEffect(()=>{
        let count=0
        if(index){
            let tikTak=setInterval(()=>{
                console.log('+1 second')
                setEvidenziato(count)
                count++
                if(count==index+1){
                    clearInterval(tikTak)
                    let newStorico=[...storico]
                    newStorico.push(numeroFortunato)
                    setStorico(newStorico)
                    setMagicNumber(numeroFortunato)
                }
            },800)//1000 è un secondo 
        }
        
        count=0
    },[index])


    return(
        <>
        <h1>Ruota Della Fortuna</h1>
        <Ruota numeri={numeri} numeroFortunato={numeroFortunato} evidenziato={evidenziato}/>
        <button onClick={()=>handleClick(numeri,setNumeroFortunato)}> <b>GIRA</b> </button>
        <Result magicNumber={magicNumber}/>
        <Storico storico={storico}/>
        </>
    )
}
