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
        if (str.includes(el)){
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
    if ((ultimaParola[ultimaParola.length-1]==e&&
        ultimaParola[ultimaParola.length-2]==r&&
        ultimaParola[ultimaParola.length-3]==i
        ) || 
        (ultimaParola[ultimaParola.length-1]==e&&
        ultimaParola[ultimaParola.length-2]==r&&
        ultimaParola[ultimaParola.length-3]==e
        ) ||
        (ultimaParola[ultimaParola.length-1]==e&&
        ultimaParola[ultimaParola.length-2]==r&&
        ultimaParola[ultimaParola.length-3]==a
        )){
            return true
        }
    return false
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

    if(!(frase.includes('Church')||frase.includes('mare'))){
     
        if(!checkSoggetto(frase)){
            return true
        }
        if(!termina(frase)){
            return true
        }
        if(!frase.includes('Cthulhu')){
            return true
        }
        if(!terminaConiugato(frase)){
            return true
        }
        if(!iniziaPunteggiato(frase)){
            return true
        }
    }
    return res
}

let pazzaTest1='.Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.'
let pazzaTest2='Andare a rimirare'
let noPTest1='Lui e’ pazzo.'
let noPTest2='Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo amano ~'
let noPTest3='~ Papa’, come sta Church? ~'

console.log(isStrPazza(pazzaTest1))
console.log(isStrPazza(pazzaTest2))
console.log(isStrPazza(noPTest1))
console.log(isStrPazza(noPTest2))
console.log(isStrPazza(noPTest3))

