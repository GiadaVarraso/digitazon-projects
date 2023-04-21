// creare una funzione getStr che prende in ingresso un array di stringhe e restituisce il valore della stringa alla posizione 2

// chiamare la funzione getStr con un array di 5 stringhe a piacere e stampare il valore prodotto.
// Per chi riesce: stampare il valore prodotto in upper case

function getStr(ar){
    return ar[2].toUpperCase()
}
console.log(getStr(['start','carta','forbice','sasso','end']))

/*
Ex 2

Creare una funzione makeObj che prende in ingresso due parametri:
una stringa e un numero.
La funzione crea e RESTITUISCE un oggetto con due proprietà: label, che avrà come valore il valore passato come primo parametro, e rate, che avrà come valore il valore passato come secondo parametro.
Chiamare la funzione makeObj due volte con valori a piacere per creare e stampare in output due oggetti con i valori indicati.
*/
function makeObj(labelVal,rateVal){
    let obj={
        label:labelVal,
        rate:rateVal
    }
    return obj
}

console.log(makeObj('rosso','blu'))
console.log(makeObj('giallo','verde'))


// creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri e restiuisce un array di 2 numeri: il primo, che rappresenta il numero più piccolo del primo array, e il secondo che rappresenta il numero più grande del primo array.
// Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, salvare l'array restituito dalla funzione e stampare il numero più grande e più piccolo con un apposito messaggio
function getMaxMinAsArray(a){
    let aRidotto=[]
    let max=a[0]
    let min=a[0]
    for (let i = 1; i < a.length; i++) {
        const num = a[i];
        if(num>max){
            max=num
        }else if(num<min){
            min=num
        }        
    }
    aRidotto.push(min)
    aRidotto.push(max)
    return aRidotto
}
let array=[3,2,9,4,5,1]
let arMinMax=getMaxMinAsArray(array)
console.log('numero minimo : '+arMinMax[0]+'\nnumero massimo : '+arMinMax[1])



