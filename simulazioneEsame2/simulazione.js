/*
Pulizia del codice, pseudocodice, modularita’, nomi delle funzioni e delle variabili e tutto cio’ che ci siamo detti in classe in queste settimane saranno oggetto di valutazione.

ES.1 - Find and replace
Scrivere una funzione che riceva in ingresso tre stringhe:
● la prima sara’ un testo
● la seconda sara’ una parola che andra’ cercata nel testo
● la terza sara’ la parola da sostituire al posto della seconda
La funzione deve quindi produrrei lo stesso effetto che si ottiene quando si fa find and
replace di una parola in un testo.
Si assuma che:
● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
non ci saranno spazi
● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
l’algoritmo
● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
caratteri
Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
La funzione deve ritornare la nuova stringa aggiornata.
*/

{
    /*
    ---------------PSEUDOCODICE------------
    creo una funzione che riceve tre parametri TESTO, FIND , REPLACE
    creo una collezione dove salvero man mano le PAROLE trovate
    creo una variabile per salvare le singole parole (PAROLA)
    ciclo sulla stringa e ogni volta aggiungo la lettera a PAROLA
        SE trovo il carattere ' ' o se siamo all ultima lettera del TESTO, PAROLA deve essere aggiunta COLLEZIONE 
        e deve essere resettato il suo valore
        poi devo passare al prossimo carattere
        //qui si poteva utilizzare anche split(' ') 
    ciclo sulla collezione e
        SE la wordToFind viene trovata 
        modifico il valore corrispondente alla collezione di quell' indice corrente con il valore di replaceWord
        aggiungo ad ogni giro il valore dell indice corrente al testo da ritornare piu uno spazio (resText) 
        ritorno il testo senza lo spazio finale in avanzo                   
    */

    function findAndReplace(text,wordToFind,replaceWord){
        let parole=text.split(' ') 
        // let parole=[]
        let parola=''
        let resText=''
        /* la versione con .split(' ') avrebbe omesso
           il codice dalla riga 48 alla riga 58
        */
        // for (let i = 0; i < text.length; i++) {
        //     if (text[i]==' '){
        //         parole.push(parola)
        //         parola=''
        //     }else if (i==text.length-1){
        //         parola+=text[i];
        //         parole.push(parola)
        //     }else{
        //         parola+=text[i];
        //     }            
        // }
        for (let i = 0; i < parole.length; i++) {
            //posso per via dello shadowing 
            let parola = parole[i]; 
            // non è la stessa della riga 43
            if(parola==wordToFind){
                parola=replaceWord
            }
            resText+=parola+' '
        }
        return resText.trimEnd()
    }
    let text='ciao sono Mario' 
    let toFind='Mario' 
    let replaceW='Luigi'
    console.log(findAndReplace(text,toFind,replaceW))
}


/* ES.2 - Find and update
Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:
[
    {
      "maggiorenne" : null,
      "type": "boolean"
    },
        {
      "nome" : null,
      "type": "string"
    },
    {
      "cognome" : "Rossi",
      "type": "string"
    },  
    {
      "eta" : null,
      "type": "number"
    },  
    {
      "voti" : null,
      "type": "array"
    },  
    {
      "eta" : null,
      "type": "number"
    },  
    {
      "asset" : null,
      "type": "object"
    }
]

sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
regole:
● se il type e’ “boolean” deve aggiornare usando false
● se il type e’ “string” deve aggiornare usando stringa vuota
● se il type e’ “number” deve aggiornare usando 0
● se il type e’ “array” deve aggiornare usando array vuoto
● se il type e’ “object” deve aggiornare usando oggetto vuoto
Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.
*/

/*----------------PSEUDOCODICE-------------
creo una funzione findAndUpdate che ha un parametro in ingresso array
creo il mio array OBJECTS
richiamo la funzione findAndUpdate e glielo passo e nella funzione:
ciclo gli oggetti contenuti in questo array
    controlla se il valore della prima proprietà è null.
    solo se null 
        controllo la proprietà type e la comparo con i case di uno 
            switch 
            se boolean aggiorno utilizzando false
            se string aggiorno utilizzando stringa vuota
            se number aggiorno in 0
            se array aggiorno in array vuoto
            se object aggiorno in obj vuoto.
        creo l oggetto e lo pusho nel array risultato
    se non è null aggiungo l oggetto cosi com è all array risultato
dopo aver aggiornato la funzione deve ritornare l'array aggiornato
*/ 

function findAndUpdate(objects){
    let resultArray=[]
    objects.forEach(obj => {
        let values=Object.values(obj)
        let firstPropertyVal=values[0]
        let keys=Object.keys(obj)
        let firstPropertyKey=keys[0]
        let type=values[1]
        if (firstPropertyVal==null){
            let newOb
            switch(type){
                case 'boolean':
                    firstPropertyVal=false
                break
                case 'string':
                    firstPropertyVal=''   
                break
                case 'number':
                    firstPropertyVal=0
                break
                case 'array':
                    firstPropertyVal=[]
                break
                case 'object':
                    firstPropertyVal={}
            }
            newOb={ 
                [firstPropertyKey]:firstPropertyVal,
               'type':type
            }
            resultArray.push(newOb)
        }else{
            resultArray.push(obj)
        }
    });
    return resultArray
}

let arrayOfObjects=[
    {
      "maggiorenne" : null,
      "type": "boolean"
    },
        {
      "nome" : null,
      "type": "string"
    },
    {
      "cognome" : "Rossi",
      "type": "string"
    },  
    {
      "eta" : null,
      "type": "number"
    },  
    {
      "voti" : null,
      "type": "array"
    },   
    {
      "asset" : null,
      "type": "object"
    }
]

console.log(findAndUpdate(arrayOfObjects))


/* vedi MDN node per il terzo esercizio della simulazione */
