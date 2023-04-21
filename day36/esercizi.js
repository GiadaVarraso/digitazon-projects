/*AM----Ex 1

creare un array in cui occorre includere 5 dati di tipi diversi:
- un letterale oggetto con proprietà x: 10 e y: 5
- un numero (100)
- una stringa ("javascript")
- una mappa ("label" -> "sono una mappa")
- un array [40, 50, 60]

Iterare sull'array esterno con un foreach e...
se l'elemento corrente è...

un letterale oggetto, stampa la somma delle sue proprietà x e y

un numero, controlla se è > 100 scrivi red, altrimenti blue

una stringa, stampa il suo primo carattere

una mappa, stampa il valore della sua proprietà "label", se ce l'ha

un array, stampa i numeri in ordine inverso
*/

let ar=[]

let obj={
    x:10,
    y:5
}

let num=100
let str='javascript'
let m1=new Map()
m1.set('label','sono una mappa')
let a1=[40,50,60]

ar.push(obj,num,str,m1,a1)

ar.forEach((el)=>{
    if (el instanceof Map){
        el.has('label')?console.log(el.get('label')):console.log('no label property found');
    }else if(el instanceof Array){
        console.log('sono un array - stampo numeri in ordine inverso');
        for (let i = el.length-1; i >=0; i--) {
            console.log(el[i]);            
        }
    }else if(el instanceof Object){
        let sum=el.x+el.y
        console.log('oggetto - somma proprietà = '+ sum)
    }

    if (typeof el =='string'){
        console.log('sono una stringa - primo carattere = '+el[0])
    }
    if (typeof el =='number'){
        el>100?console.log('numero - red'):console.log('numero - blue')
    }

})
