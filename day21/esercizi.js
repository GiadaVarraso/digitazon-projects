
// Nota: PRIMA DEL CODICE, REALIZZARE GLI ALGORITMI IN STEP NEI COMMENTI, CHE DEVONO ESSERE VISIBILI NEL CODICE DELL'ESERCIZIO
console.log("---------------------es1");
// Ex 1: 
// dato un array di 4 stringhe a piacere, stampare ogni valore stringa invertito (es 'ciao' diventa 'oaic', ...)
{
    let es1 = ['arena', 'boss','cardinali', 'intercardinale']
    let words = ''

    for (let i = 0; i < es1.length; i++) {
        
        words = ''

        for (let j = es1[i].length-1; j>=0; j--) {
            words += es1[i][j]
        }

        console.log(words)
    }
}

console.log("---------------------es2");
// Ex 2:
// dato un array di 10 numeri a piacere, stampare quanti sono i numeri positivi, quelli negativi, quelli dispari e quelli pari (per trovare il resto di una divisione utilizzare l'operatore %)
{   
    let array=[1,2,3,4,5,-7,7,-8,9,-10]
    let pariCount=0
    let countNeg=0


    for (let i=0; i<array.length; i++){

        let resto = array[i] % 2
        
        if(resto ==0){
            pariCount++
        }

        if(array[i] <0 ){
            countNeg++
        }
    }

    console.log("count pari : " + pariCount)
    console.log("count dispari : " + (array.length - pariCount))
    console.log("count neg : " + countNeg)
    console.log("count pos : " + (array.length-countNeg))

}
console.log("---------------------es3");
// Ex 3:
// dato un array di 3 stringhe a piacere, stampare quante di queste stringhe iniziano con il valore 'a' e terminano con il valore '_'
{
    let array=["armadillo_","pippo_","aristotele_"]

    for (let i = 0; i < array.length; i++) {
        const el = array[i];

        if(el.charAt(el.length-1)=='_' && el.charAt(el[0])=='a' ){
            console.log(el)
        }
    }

}

console.log("---------------------es4");
// Ex 4:
// data una stringa a piacere, 
// SE questa contiene una vocale, un underscore, un dollaro e un numero, stampare 'password OK', altrimenti, stampare 'password NOT OK'

{
    
    function testPass(s){
        let pass=false
        
        
        for (let i = 0; i <= s.length-1; i++) {
            if( ! isNaN(s[i])){  
                pass=true
            }
        }
        
        if( pass && (
            s.includes('a') ||
            s.includes('e') ||
            s.includes('i') ||
            s.includes('o') ||
            s.includes('u')) 
            &&
            s.includes('$')  &&
            s.includes('_') 
            ){
                console.log("password OK")
            }else{
                console.log("password NOT OK")
            }  
        }
        
    let s= "string_1"
    testPass(s)
}

console.log("---------------------es5");
// Ex 5:
// dato un array di 5 valori ETEROGENEI a piacere, stabilire:
// - quante stringhe ci sono
// - quanti numeri ci sono
// - quanti booleani ci sono
// - qual è il tipo di dato maggiormente presente nell'array

{
    let array=['Federica','Giada',1,2,3,true]
    const n="number"
    const s="string"
    const b="boolean"

    let countNum=0
    let countStr=0
    let countBol=0
    let max = ''
    
    for (let i = 0; i < array.length; i++) {
        const elTy = typeof array[i];

        if(elTy == n){
            countNum++
            if(countNum > countBol && countNum > countStr){
                max=n
            }

        }else if(elTy == s){
            countStr++
            if(countStr > countBol && countStr > countNum){
                max=s
            }
        }else if(elTy ==b){
            countBol++
            if(countBol > countNum && countBol > countStr){
                max=b
            }
        }
    }
    console.log("nell array abbiamo : " 
                + countBol + " " + b + ", "
                + countStr + " " + s + ", "
                + countNum + " " + n + " ")
    console.log("quale tipo è piu presente ? "+max)
    
}



