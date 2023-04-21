/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/
// Esempio di output

// FOREACH:
// Area rettangolo 1: 13
// Area rettangolo 2: 45
// Area rettangolo 3: 56

// FOR:
// Area rettangolo 1: 13
// Area rettangolo 2: 45
// Area rettangolo 3: 56

let ar=[
    {
        base: 3,
        altezza: 2
    },
    {
        base: 5,
        altezza: 6
    },
    {
        base: 3,
        altezza: 6
    }
]

console.log('\n\n\nFOREACH:');
ar.forEach((v)=>{
    console.log('area rettangolo: '+ (v.base*v.altezza))
})

console.log('\nFOR:');
for (let i = 0; i < ar.length; i++) {
    const el = ar[i];
    console.log('area rettangolo: '+ (el.base*el.altezza))
}


//------------------------------------------PM

// Scrivere una funzione che dato in ingresso un numero, ritorni il fattoriale di quel numero.
// fattoriale = il prodotto dei numeri interi positivi minori o uguali a tale numero
// fattoriale(0) -> 1
// fattoriale(1) -> 1
// fattoriale(2) -> 2
// fattoriale(3) -> 6
// fattoriale(4) -> 24
// ...
{
function fat(p){
    if(p==0){
        return 1
    }

    let fat=1
    for (let i = 1; i <= p; i++) {
        fat*=i
    }
    return fat
}

let numero=11
console.log('\n\n\n\nPM-es1:\nFattoriale di '+numero+' = '+fat(numero))
}


{
console.log('\n\n\n\nfattoriale ricorsivo');
function fat(p){
    if(p==0){
        return 1
    }
    return fat(p-1)*p
}

let numero=11
console.log('PM-es2:\nFattoriale di '+numero+' = '+fat(numero))
}


function invert(ar){
    let ar2=[]
    for (let i = ar.length-1; i >= 0 ; i--) {
        const el = ar[i];
        ar2.push(el)        
    }
    return ar2
}

let ar1=[2,5,78,9]
invert(ar1)







