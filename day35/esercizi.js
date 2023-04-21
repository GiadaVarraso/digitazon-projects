/*
Ex 1
Utilizzando un apposita strategia e utilizzando il ciclo WHILE, stampare i numeri da 20 a 15 (scalando) omettendo il numero 19
*/
{
let i =20
while(i>=15){
    if(i==19){
    i--
    continue
    }
    console.log(i)
    i--
}
}

/*
Ex 2
Creare un array di 5 parole.
Iterare su questo array in 2 modi.
PRIMA con un while, per stampare tutte le singole parole nell'array MAIUSCOLE. In questo caso, vogliamo ciclare l'array in senso invertito.

DOPO con un foreach, per stampare tutte le parole dell'array in ordine
*/
{
console.log('\n\n\nes.2');
let ar=['latte e biscotti','latte e cereali','pane e nutella','brioche e succo','yogurt e cereali']

console.log('\nWHILE:\n');
let i=ar.length-1
while (i>=0) {
    console.log(ar[i].toUpperCase())
    i--
}

console.log('\nFOREACH:\n');
ar.forEach(el=>console.log(el))
}

console.log('\n\n\n\n\nes.3');
// creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:
let language={
    label:'javascript',
    tags:['debolmente tipizzato','alto livello','linguaggio interpretato(non viene compilato ma eseguito direttamente)'],
    printTags: function fn (){
        let i = 0
        while(i < this.tags.length){
            const el = this.tags[i];
            console.log((i+1)+'. '+el) 
            i++           
        }
    }
}
language.printTags()
// - proprietà label, indica il nome del linguaggio
// - proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
// - un metodo printTags che itera sui tag dell'oggetto e li stampa con un WHILE

// chiamare il metodo printTags per mostrare i dati in console


console.log('\n\n\n\n\n-------------PM-------------');
console.log('es.1');
// write a function such that given JavaScript
// prints the following
//          s
//         s c
//       a s c r
//     v a s c r i
//   a v a s c r i p
// J a v a S c r i p t
/**
 *prints in console the piramid patterns whith given word
 * @param {string} S 
 * @returns {void}
 */
function piramid(S){
/*devo fare un ciclo che stamperà le righe che mi servono
le righe sono tante quante la metà della parola
inizialmente devo memorizzarla tutta in una collezione
poi devo togliere due lettere inizio-fine ad ogni riga e memorizzare
la stringa risultante nella collezione
devo prendere l ultima lettera della punta
al posto delle lettere tolte dovranno esserci degli spazi
tra le lettere dovra esserci uno spazio
*/
    let ar=[S]
    for (let i = 1; i <= S.length/2-1; i++) {
        ar.push(S.slice(+i,-i))
    }
    ar.push(S[S.length/2-1])
    
    for (let i = ar.length-1; i>=0; i--) {
        ar[i]=addSpace(ar[i],i)
        console.log(ar[i]);
    }
}
piramid('Javascript')

function addSpace(s,r){
    return addSpaceLeft(addSpaceBetween(s),r) 
}

function addSpaceLeft(s,r){
    let res=''
    for (let i = 0; i < r; i++) {
        res+='  '        
    }
return res+=s
}
function addSpaceBetween(s){
    let res=''
    for (let i = 0; i < s.length-1; i++) {
        res+=s[i]+' '        
    }
return res.trimEnd()
}

// ----------------- alberto
// write a function such that given JavaScript
// prints the following
//          s
//         s c
//       a s c r
//     v a s c r i
//   a v a s c r i p
// J a v a S c r i p t

//           c
//         s c r
//       a s c r i
//     v a s c r i p
//   a v a s c r i p t
// J a v a S c r i p t !

// scrivo una funzione che prende in ingresso una stringa 
// e ritorna quella stringa senza tanti caratteri ad inizio e 
// fine stringa
// quanto e' il numero dentro charsNumber
function getLine(string, charsNumbers) {
    // posso usare slice e risolverlo in una riga
    // return string.slice(charsNumbers, string.length - charsNumbers)

    // oppure posso non essere a consocenza di slice e lo 
    // risolvo con un algoritmo
    let res = ''
    for (let i = charsNumbers; i < string.length - charsNumbers; i++) {
        res += string[i]
    }
    return res
}

// scrivo una funzione che mette gli spazi tra ogni carattere della
// stringa che ricevo in input
function insertSpacesBetween(string) {
    // let res = ''
    // for (let i = 0; i < string.length; i++) {
    //     res += string[i] + ' '
    // }

    // return res

    return string.split('').join(' ')
}

function insertSpacesLeft(string, n) {
    let res = string
    for (let i = 0; i < n; i++) {
        res = ' ' + res
    }

    return res
}

function lineBacchettaMagica(string, charsNumber) {
    let line = getLine(string, charsNumber)
    line = insertSpacesBetween(line)
    line = insertSpacesLeft(line, charsNumber * 2)
    return line
}

function solution(string) {
    let res = []
    let to = (string.length / 2)
    for (let i = 0; i < to; i++) {
        res.push(lineBacchettaMagica(string, i))
    }

    // o reverse dell'array e stampo da sx a dx

    // se siamo nella condizione in cui la stringa e' pari
    // allora dobbiamo mettere la punta della piramide
    if (string.length % 2 == 0) {
        let middleCharIndex = (string.length / 2) - 1
        let middleChar = string[middleCharIndex]
        console.log(insertSpacesLeft(middleChar, (to * 2) - 1))
    }

    // oppure stampo da dx a sx
    for (let i = res.length - 1; i >= 0; i--) {
        console.log(res[i])
    }
}

// solution("JavaScript")

















