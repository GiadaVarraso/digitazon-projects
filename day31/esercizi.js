// data una stringa in ingresso la funzione deve calcolare
// la sottostringa palindroma piu lunga 
// es. abba 1abba1 c ""

//PSEUDOCODICE  versione 1 -------------------
//scrivere una stringa
//scrivere una funzione di nome inverti
//scrivo un for che parte dall'ultimo carattere e si avvicina al primo
//ad ogni ciclo inserisce la corrente letterra del ciclo in una nuova stringa


// function inverti(a) {
//     let b = ''
//     for (let i=a.length-1; i>=0; i--) {
//     b += a[i] 
//     }
//     return b
// }

// function palindroma(a) {
//     return a == inverti(a)
// }


// console.log(palindroma('esse'))


// data una stringa in ingresso la funzione deve calcolare
// la sottostringa palindroma piu lunga 
// es. abba 1abba1 c ""
/* pseudocodice---- versione 2 ------
    tolgo eventuali spazi nel caso fosse una frase
*/

function MaxSubStringPalindrome(word){
    word=word.toLowerCase().replaceAll(' ','')
    let find=''
    let collezione=new Set()

    for (let i = 1; i < word.length-1; i++) {
        const cur = word[i];
        trovaUguali=true
        find=cur
        let countS=1
        let countD=1
        do {
            const pre=word[i-countS]
            const post=word[i+countD]
            if(pre == post && (pre!=undefined && post!= undefined)){
                find=pre+find+post;
                collezione.add(find)
                countD++
                countS++
            }else if(cur == post && (pre!=undefined && post!= undefined)){
                find=find+post;
                countD++
            }else{
                trovaUguali=false
            }
        } while(trovaUguali) 
    }
    
    let max=0
    let maxSubString=''
    for (const item of collezione) {
        if (item.length>max){
            max=item.length
            maxSubString=item
        }
    }

    // DEBUG
    // console.log('la parola era \''+word +'\'');
    // console.log('ho trovato le seguenti parole palindrome al suo interno:')
    // for (const item of collezione) {
    //     console.log('- '+item )
    // }
    
    return 'la parola palindroma piu lunga è :\n'+ maxSubString
}

// console.log(MaxSubStringPalindrome('1abnba1'))
// console.log(MaxSubStringPalindrome('1abnba1ono1'))
// console.log(MaxSubStringPalindrome('Amo ridere di Roma'))
// console.log(MaxSubStringPalindrome('i tipici bicipiti'))
// console.log(MaxSubStringPalindrome('poll opossum'))
// console.log(MaxSubStringPalindrome('pollopossum'))
console.log(MaxSubStringPalindrome('o pollo opossum'))



// scrivere una funzione che prende in ingresso una stringa che contiene 
// un numero in notazione romana,deve tradurlo in notazione araba

// pseudocodice
// creo la funzione e il suo richiamo 
// come parametro ha una stringa 
// devo creare una variabile che mi servirà a restituire la risposta
// creo una mappa per tradurre i caratteri che trovo nella stringa del parametro
// riempo la mappa con i caratteri romani
// controllo se esiste corrispondenza del carattere corrente nel parametro con una delle chiavi nella mappa 
    // se si, prendo il valore corrispondente a quella chiave e lo memorizzo nella variabile risultato
    // se ci sono altri caratteri da controllare sommo il risultato alla variabile
// se il carattere corrente è preceduto da un carattere che corrisponde ad un numero piu piccolo

function romaniToArab(numRomano){
    let result=0
    let map=new Map([
        ['x',10],
        ['v',5],
        ['i',1]
    ])
    for (let i = 0; i < numRomano.length; i++) {
        let current = numRomano[i];
        let pre=numRomano[i-1]
        if(map.has(current)){
            if(current>pre){
                result-=map.get(current)
                result=Math.abs(result)
            }else{
                result+=map.get(current)
            }
        }  

    }
    return result
}

// console.log(romaniToArab('viii'))






















