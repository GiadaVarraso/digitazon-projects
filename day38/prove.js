// includes() - some() 
// const array1 = [1, 2, 3];
console.log(array1.includes(2));

let s='ciarare ?sono mario'
let ar=s.split(' ')
console.log(ar)
console.log(ar.includes('?'))

for (let i = 0; i < ar.length; i++) {
    const parola = ar[i];
    console.log(parola[0] =='?' || parola[1] == '!')
}

let verbs=['are','ere','ire']
let coniugazione=verbs.some(v => 
        { for (let i = 0; i < ar.length; i++) 
            {if (ar[i].endsWith(v)){
                return true
            }}
        }
    )
    
console.log('coniugato?' + coniugazione)

// reduce() e slice e andare a capo

// slice
console.log('ciao'.slice(-3));

// andare a capo
console.log('ci \n'+ 'mi chiamo giada')


// da un array a un elemento
const array1 = [1, 2, 3, 4];
// reduce()
// metodo che esegue una funzione di callback su ogni elemento dell array 
// e restituirà un singolo valore di output 

const booleani=[false,true,false,false]
// const total=numbers.reduce(sum,0)
const sommaBoolean=booleani.reduce((accumulator,value)=> accumulator||value, false)

// function sum (accumulator, value){
    // return accumulator+value
// }

console.log('\n\n\n\n\n' + sommaBoolean);


let sellers = [
    {reparto: "Cancelleria",       spese: [500, 40, 60,]},
    {reparto: "Servizi igienici",  spese: [1000, 1, 200]},
    {reparto: "Vendite",           spese: [0]},
];

sellers.forEach(function (rep) {
    console.log(rep.spese);
                                        //accumulator,firstvalue
    let spese = rep.spese.reduce(function (totale, SingolaSpesa,) {
        return totale-SingolaSpesa

    });
    console.log(spese);
})

// esercizio tipo
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// console.log(sumWithInitial)


// ESERCIZIO 
// scrivere una funzione chiamata reduceString
// che prende in ingresso una funzione reducer e una stringa
// la funzione reducer deve essere invocata con due argomenti: il primo
// e' il totale corrente, il secondo e' l'i-esima lettera, come valore
// di ritorno da il nuovo totale
// la funzione reduceString deve ritornare il totale ottenuto chiamando
// la funzione reducer su ogni lettera della stringa

// ad esempio per l => l == "a" ? 1 : 2 e "abc" deve ritornare 5
// ad esempio per l => (l == "1" || l == "2") ? 0 : 1 e "12123" deve ritornare 1

function reduceString(funx,string){
    let tot=0
    for (let i = 0; i < string.length; i++) {
        tot=funx(tot,string[i])
    }
    return tot 
}

function reducer(tot,letter){
    if(isNaN(stringa)){
        tot+=letter=='a'?1:2 
    }else{
         tot+= (letter == "1" || letter == "2") ? 0 : 1 
    }
    return tot
}

// let stringa='abc'
let stringa='12123'
console.log('reduceString '+ reduceString(reducer,stringa))

// console.log(stringa.split('').reduce((total,letter)=> total+=letter=='a'?1:2 ,0))
