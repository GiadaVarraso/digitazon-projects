//  ESAME MODULO 2 - Javascript
//  esercizio 1 - Trova chi spende più e chi spende meno

// Pseudocodice:
// devo creare una funzione SpesaMinMaxReparti che ha 
// parametro in ingresso la stringa delle spese
// la funzione deve fare return di un array di 2 oggetti 
// repartiObjs che hanno come proprietà 'reparto' e 'spesa'
// i due oggetti saranno rispettivamente il reparto che spende di piu e quello che spende di meno con rispettivi cumulispese
// creo due variabili min e max, e altre due per repartoMinSpesa e RepartoMaxSpesa, 
// creo anche una variabile di di accumuloSpesa per le spese del reparto
// devo convertire la stringa in un array con split
//  (ogni carattere di a capo) e tolgo gli spazi ainizio-fine 
// itero sull array e se sono stringhe aggiungo come reparto in una mappa
// se sono numeri sommo in accumuloSpesa il valore e poi 
// aggiungo come valore nella mappa
// ad ogni vuoto di riga setto mappa
// quando ho la mappa completa uso il foreach e controllo 
// se accumuloSpesa è < di min , min diventa accumuloSpesa e repartoMinSpesa 
// del Reparto corrente
// se accumuloSpesa è > di max , max diventa accumuloSpesa e repartoMaxSpesa 
// del Reparto corrente
// creo i due oggetti
// li pusho dentro l array degli oggetti da ritornare

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
            mapReparti.set(reparto,cumuloSpesa)
            reparto=''
            cumuloSpesa=0
        }else if(isNaN(el)) {
            reparto=el
        }else{
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
