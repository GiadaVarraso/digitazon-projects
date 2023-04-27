//  ESAME MODULO 2 - Javascript
//  Valutazione:
//  Pulizia del codice (no console.log di debug, indenta bene , togliere commenti extra)
//  pseudocodice (indentare anche gli step innestati, aggiornarlo se penso di modificare il codice)
//  modularita’ (no hardcoded, crea delle funzioni se necessario spezzettare il problema)
//  i nomi delle funzioni e delle variabili parlanti
//  Inoltre anche la perfetta aderenza alle regole per la consegna sara’ valutata

// Inviare una email all’indirizzo alberto.zaccagni@digitazon.school, l’oggetto deve essere
// “Modulo JS - NOME COGNOME”, nella mail non ci deve essere alcun testo se non i link ai
// singoli file .js contenenti le soluzioni, che saranno stati precedentemente pushati su Github.


// esercizio 1 - Trova chi spende più e chi spende meno
// Vi viene fornita una stringa che rappresenta le spese di ogni reparto della vostra societa’, la
// richiesta e’ che troviate il nome del reparto che spende di più e quello che spende meno,
// con i relativi importi totali.
// Segue un esempio di questa stringa:
let spese=
`
Cancelleria
500
40
60

Servizi igienici
1000
1
200

Vendite
0
`
// Dovete scrivere quindi una funzione che data in ingresso una stringa simile a quella data sia
// in grado di sommare tutti gli importi e ritornare quanto richiesto, cio’ che puo’ cambiare sono
// i nomi e il numero dei reparti e gli importi, la struttura rimarra’ la stessa.
// In questo esempio andrebbe ritornato un risultato di questo tipo:
// [{reparto:'servizi igienici',spesa:1201},{reparto:'vendite',spesa:0}]

// Pseudocodice:
// devo creare una funzione SpesaMinMaxReparti che ha parametro in ingresso la stringa delle spese
// la funzione deve fare return di un array di 2 oggetti repartiObjs che hanno come proprietà 'reparto' e 'spesa'
// i due oggetti saranno rispettivamente il reparto che spende di piu e quello che spende di meno con rispettivi cumulispese
// creo due variabili min e max, e altre due per repartoMinSpesa e RepartoMaxSpesa, 
// creo anche una variabile di di accumuloSpesa per le spese del reparto
// devo convertire la stringa in un array con split (ogni carattere di a capo) e tolgo gli spazi ainizio-fine 
// itero sull array e se sono stringhe aggiungo come reparto in una mappa
// se sono numeri sommo in accumuloSpesa il valore e poi aggiungo come valore nella mappa
// ad ogni vuoto di riga setto mappa
// quando ho la mappa completa uso il foreach e controllo 
// se accumuloSpesa è < di min , min diventa accumuloSpesa e repartoMinSpesa Reparto corrente
// se accumuloSpesa è > di max , max diventa accumuloSpesa e repartoMaxSpesa Reparto corrente
// creo i due oggetti
// li pusho dentro l array degli oggetti da ritornare

function SpesaMinMaxReparti(speseReparti){
    let repartiObjs=[]
    let repartoMaxSpesa=''
    let repartoMinSpesa=''
    let max=0
    let min=Number.POSITIVE_INFINITY
    let mapReparti=new Map()
    let reparto=''
    let cumuloSpesa=0

    let arrSpeseReparti=speseReparti.trim().split('\n')

    for (let i = 0; i < arrSpeseReparti.length; i++) {
        const el = arrSpeseReparti[i];

        if(el==''|| i== arrSpeseReparti.length-1){
        // nel caso trova la riga vuota oppure è ultimo giro 
            mapReparti.set(reparto,cumuloSpesa)
            reparto=''
            cumuloSpesa=0
        }else if(isNaN(el)) {
            // el sarebbe nome reparto
            reparto=el
        }else{
            // el sarebbe numero da sommare
            cumuloSpesa+=parseInt(el)
        }
    }

    mapReparti.forEach((v,k)=>{
        if(v>max){
            repartoMaxSpesa=k
            max=v
        }
        if(v<min){
            repartoMinSpesa=k
            min=v
        }
    })

    let objMax={
        'reparto': repartoMaxSpesa,
        'spesa': max
    }
    let objMin={
        'reparto': repartoMinSpesa,
        'spesa': min
    }
    repartiObjs.push(objMax)
    repartiObjs.push(objMin)
    return repartiObjs
}
console.log(SpesaMinMaxReparti(spese)) 
// [{reparto:'Servizi igienici',spesa:1201},{reparto:'Vendite',spesa:0}]



