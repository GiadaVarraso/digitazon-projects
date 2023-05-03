/*
Scrivere una funzione AND che si comporti come l'and nei booleani 
(&&) e accetti un numero qualsiasi di parametri
AND(true, false)
AND(true)
AND(false)
AND(false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false,
false, true, true, true, false, false, true, true, true, false,false, 
true, true, true, false, false, true, true, true, false,false, true, 
true, true, false, false, true, true, true, false,false, true, true, 
true, false, false, true, true, true, false,false, true, true, true, 
false, false, true, true, true, false)
*/ 

function and(...args){
    let res= true; // questa a true perchè non deve 'interferire'
    for (let i = 0; i < args.length; i++) {
        // let res= 0 && 'ahh' && true
        //ma non posso cosi,perchè non torna un booleano , ma 'ahh'
        res=!!( res && args[i])
    }
    return res
}

console.log(and(true,false))


// Scrivere una funzione che prende in ingresso un oggetto, si devono stampare
// solo i valori relativi a quelle chiavi
//  * "chiave1"
//  * "chiave2"
// a prescindere da quante ce ne siano nell'oggetto.
// Non si possono utilizzare if, non si puo' utilizzare l'operatore punto (.) cercate di utilizzare il destructoring

function es(ob){
    let {nome,cognome} = ob
    return nome + ',' + cognome
}

let obj={
    nome:'a',
    cognome:'b'
}

console.log(es(obj));



