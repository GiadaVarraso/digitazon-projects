//  ESAME MODULO 2 - Javascript
//  esercizio 2 - Oh, non puoi farci niente. Siamo tutti pazzi qui.

// pseudocodice:
// devo scrivere una funzione che analizza la stringa che 
// gli viene passata in ingresso e 
// con una serie di if determina se si verificano o meno le condizioni 
// per cui la stringa viene definita pazza
// se si verificano ritorna true
// faccio delle funzioni a parte che si prendono carico ciascuna 
// di fare uno specifico controllo
// se i controlli vengono superati invece ritorna il booleano false

function checkSoggetto(str){
    let arSogg=['Lui', 'Lei', 'Egli', 'Ella']
    for (let i = 0; i < arSogg.length; i++) {
        const el = arSogg[i];
        // if (str.includes(el)){
        if (str.toLowerCase().includes(el.toLowerCase())){  // FIXATO post consegna
            return true
        }       
    }
    return false
}

function termina(str){
    let last3Letters=str.substring(str.length-3,str.length)
    if (last3Letters=='?!?'){
        return true
    }
    return false
}


function terminaConiugato(str){
    let arrParole=str.split(' ')
    let ultimaParola=arrParole[arrParole.length-1]
    return ((ultimaParola[ultimaParola.length-1]=='e' && // FIXATO post consegna
        ultimaParola[ultimaParola.length-2]=='r' &&  // FIXATO post consegna
        ultimaParola[ultimaParola.length-3]=='i'     // FIXATO post consegna
        ) || 
        (ultimaParola[ultimaParola.length-1]=='e' && // FIXATO post consegna
        ultimaParola[ultimaParola.length-2]=='r' &&  // FIXATO post consegna
        ultimaParola[ultimaParola.length-3]=='e'     // FIXATO post consegna
        ) ||
        (ultimaParola[ultimaParola.length-1]=='e' && // FIXATO post consegna
        ultimaParola[ultimaParola.length-2]=='r' &&  // FIXATO post consegna
        ultimaParola[ultimaParola.length-3]=='a'     // FIXATO post consegna
        ))
    }
            

function iniziaPunteggiato(frase){
    let punteg=[',','.','!','?',':',';','-','~']
    for (let i = 0; i < punteg.length; i++) {
        if(frase[0] == punteg[i]){
            return true
        }        
    }
    return false
}

function isStrPazza(frase){
    let res=false

    // if(!(frase.includes('Church') || frase.includes('mare'))){ 
    if(!frase.includes('Church') || frase.includes('mare')){ // FIXATO post consegna
     
        if(!checkSoggetto(frase)){
            return true
        }
        // if(!termina(frase)){
        if(termina(frase)){ // FIXATO post consegna 
            return true
        }
        // if(!frase.includes('Cthulhu')){
        if(frase.includes('Cthulhu')){ // FIXATO post consegna
            return true
        }
        // if(!terminaConiugato(frase)){
        if(terminaConiugato(frase)){ // FIXATO post consegna
            return true
        }
        // if(!iniziaPunteggiato(frase)){
        if(iniziaPunteggiato(frase)){ // FIXATO post consegna
            return true
        }
    }
    return res
}

let pazzaTest1='.Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.'
let pazzaTest2='Andare a rimirare'
let noPTest1='Lui e’ pazzo.'
let noPTest2='~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo amano ~ '
let noPTest3='~ Papa’, come sta Church? ~'

console.log(isStrPazza(pazzaTest1))//true
console.log(isStrPazza(pazzaTest2))//true
console.log(isStrPazza(noPTest1)) //false
console.log(isStrPazza(noPTest2)) //false  ...non dovrebbe essere true?
console.log(isStrPazza(noPTest3)) //false
console.log(isStrPazza('Cthulhu')) //true

