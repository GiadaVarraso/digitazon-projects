// Ex 1
// dato l'array chiamato 'a1' con valori [10, 'ciao', true, 20, 'js', 4] 
// usare un foreach per calcolare la somma degli elementi numerici e stamparla in output

let a1= [10, 'ciao', true, 20, 'js', 4] 

let res=0
a1.forEach((i)=>{
    if(typeof i == 'number'){
        res+=i
    }
})
console.log(res)


// Ex 2
// creare una mappa chiamata m1, che rappresenta un'automobile, con la seguente struttura: 
// model -> 'Panda', maxSpeed: 250, price: 1000
// creare una mappa chiamata m2, che rappresenta un'automobile, con la seguente struttura: 
// model -> 'Audi', maxSpeed: 200, price: 5000
// tramite due foreach, stampare le singole caratteristiche delle due automobile.
// DOPO, stampare in output il modello della macchina con la velocità massima più elevata

// let m1=[
//     ['model','Panda'],
//     ['maxSpeed', 250],
//     ['price', 1000]
// ]

// let m2=[
//     ['model','Audi'],
//     ['maxSpeed', 200],
//     ['price', 5000]
// ]

// let max =0
// let maxMod=''
// m1.forEach(function(v,k){
//     console.log(v)
//     if(v[0]=='maxSpeed') 
//     if(max< v[1]) max=v[1]; maxMod=m1[0][1]
    
// })
// m2.forEach(function(v,k){
//     console.log(v)
//     if(v[0]=='maxSpeed') 
//     if(max< v[1]) max=v[1]; maxMod=m1[0][1]
// })

// console.log('max ='+ max +'\nmodel ='+maxMod);

let m1=new Map([
    ['model','Panda'],
    ['maxSpeed', 250],
    ['price', 1000]
])

let m2=new Map([
    ['model','Audi'],
    ['maxSpeed', 200],
    ['price', 5000]
])

let max=0
let maxMod=''

m1.forEach((v,k)=>{
    console.log(k+' : '+v);
    if(k=='maxSpeed'){
        if(max<m1.get(k)){
        max=m1.get(k)
        maxMod=m1.get('model')
        }
    }
})
console.log('_____________');
m2.forEach((v,k)=>{
    console.log(k+' : '+v);
    if(k=='maxSpeed'){
        if(max<m2.get(k)){
            max=m2.get(k)
            maxMod=m2.get('model')
        }
    }
})
console.log('_____________');

console.log('il modello piu veloce è '+ maxMod + ' con velocità max '+ max);
