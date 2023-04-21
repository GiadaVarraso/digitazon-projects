console.log('ciao');

// scrivere una funzione chiamata addUpFromNumber che 
// dato un numero positivo in input
// ritorni la somma di tutti i numeri da 1 fino al numero passato

// ad esempio: con 4 ritornerebbe 1 + 2 + 3 + 4 = 10

function addUpFromNumber(n) {
    let sum=0
    for(let i =1;i<= n;i++){
      sum+=i
    }
    return sum
  }
  addUpFromNumber(5)
          
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata alfabetoStrambo che 
  // data una stringa in ingresso
  // ritorni una copia della stringa modificata come negli esempi
  
  // ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
  // ad esempio con "" ritorna ""
  // ad esempio con "ad esempio" ritorna "ad esempioro"
  // ad esempio con "funziona solo con vocali alla fine" ritorna 
  // "funzionara soloro con vocaliri allara finere"
  
  function alfabetoStrambo(s) {
      let resultString=''
      let vocals=['a','e','i','o','u']
      let parole=s.split(' ')
      for (let i = 0; i < parole.length; i++) {
          const parola = parole[i];
          const ultimaLettera=parola.charAt(parola.length-1)
          if(vocals.includes(ultimaLettera)){
              resultString+=parola+'r'+ultimaLettera+' '
          }else{
              resultString+=parola+' '
          }
      }
      return resultString.trimEnd()
  }
  alfabetoStrambo('funziona solo con vocali alla fine')
  
  module.exports = alfabetoStrambo
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata algebra che 
  // dato un array di interi
  // ritorni il prodotto degli elementi di indice pari a cui vengono
  // sottratti tutti gli elementi di indice dispari
  
  // ad esempio: con [1, 2, 3, 4] ritornerebbe 3 - 6 = -3
  
  function algebra(arr) {
    
  }
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata arraySwap che 
  // dato un array di interi
  // ritorni un nuovo array dove, partendo da 0, il valore alla posizione i
  // e il valore alla posizione i + 1 sono invertiti di posizione
  
  // ad esempio: con [5, 6] ritornerebbe [6, 5]
  // ad esempio: con [1, 2, 3, 4] ritornerebbe [2, 1, 4, 3]
  // ad esempio: con [7, 8, 9] ritornerebbe [8, 7, 9] perche' il 9 non puo'
  // essere scambiato con niente siccome l'array e' terminato
  
  function arraySwap(arr) {
  }
  
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata concatAll che 
  // dato in ingresso un numero variabile di array
  // ritorni un nuovo array che e' la concatenazione di tutti gli array
  // passati
  
  // ad esempio: con [1] [2] [3] ritornerebbe [1,2,3]
  // ad esempio: con [1, 2, 3, 4] ritornerebbe [1, 2, 3, 4]
  // ad esempio: con [1, 2, 3] [1, 2] [3] ritornerebbe [1, 2, 3, 1, 2, 3]
  
  function concatAll(...arrs) {
  }
  
  
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata createRandomSortedArray che 
  // dato un numero n in ingresso
  // ritorni un array ordinato in
  // modo crescente lungo n che
  // contiene numeri casuali compresi tra 0 e 1,
  // estremi esclusi
  
  // ad esempio per 3 puo' ritornare
  // [0.29576384904091846, 0.8219993580808898, 0.99213923917851]
  // "puo'" perche' i numeri devono essere casuali
  // ad esempio per 0 ritorna []
  // ad esempio per -1 ritorna []
  
  
  function createRandomSortedArray(n) {
  }
  
  
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata firstMatrix che 
  // dato un array e un numero n
  // ritorni una matrice con l'array riprodotto n volte
  
  // ad esempio con [1,2,3] e 3 ritorna [[1,2,3],[1,2,3],[1,2,3]]
  // ad esempio con [1,2] e 1 ritorna [1,2]
  // ad esempio con [1,2,3,4] e 0 ritorna []
  
  function firstMatrix(arr, n) {
  }
  
  
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata intersection che 
  // dati due array di interi
  // ritorni un array che rappresenti l'intersezione di questi array
  
  // ad esempio con [1,2,3] e [4,5,6] ritorna []
  // ad esempio con [1,2] e [2,3] ritorna [2]
  
  
  function intersection(a, b) {
  }
  
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata isHomogeneous che 
  // dato un array di elementi in ingresso
  // ritorni true se l'array contiene elementi tutti dello stesso tipo
  // o false altrimenti
  
  function isHomogeneous(arr) {
  }
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata largestSwap
  // che prende in ingresso un numero di due cifre,
  // ritorna true se e' il piu' grande dei due possibili scambi di
  // cifre, false altrimenti
  
  // ad esempio per 27 deve ritornare false perche' posso invertire 
  // le due cifre per ottere 72
  // ad esempio per 43 deve ritornare true perche' 34 sarebbe minore
  
  function largestSwap(n) {
  }
  
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata mapsUnion che 
  // date due mappe (in JS chiamate anche oggetti) in ingresso
  // ritorni una mappa (o oggetto) che contenga tutte le chiavi e 
  // tutti i valori delle due mappe
  // in caso di chiavi duplicate deve rimanere il valore della 
  // seconda mappa (o oggetto)
  
  // e' una funzione che volendo si puo' scrivere in una riga sola
  
  function mapsUnion(m1, m2) {
  }
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata removeVowels che 
  // data una stringa in ingresso
  // ritorna la stringa senza le vocali
  
  // suggerimento, ritornate una nuova stringa senza tentare di 
  // modificare la stringa originale
  
  // ad esempio "ciao" deve ritornare "c"
  // ad esempio "aeiou" deve ritornare ""
  // ad esempio "esercizio" deve ritornare "srcz"
  
  function removeVowels(string) {
    let res=''
    let vocali=['a','e','i','o','u']
    for (let i = 0; i < string.length; i++) {
        const lettera = string[i];
        if(!vocali.includes(lettera)){
            res+=lettera.trimEnd()
        }        
    }
    return res
  }
  console.log(removeVowels('ciao a tutti o nessuno boh'))
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata reverse che 
  // data una stringa in ingresso
  // ritorni la stringa inversa
  
  // ad esempio "ciao" deve ritornare "oaic"
  // ad esempio "Jessica" deve ritornare "acisseJ"
  
  
  function reverse(string) {
      let res=''
      for (let i = string.length-1; i >= 0; i--) {
          const el = string[i];
          res+=el
      }
      return res
  }
  
  reverse('ciao')
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata union che 
  // dati due array di interi
  // ritorni un array che rappresenti l'unione di questi array
  
  // ad esempio con [1,2,3] e [4,5,6] ritorna [1,2,3,4,5,6]
  
  function union(arr1, arr2) {
      for(let i=0;i<arr2.length;i++){
          arr1.push(arr2[i])
      }
    return arr1
  }
  
  union([1,2,3],[1,2,4,5,6,7])
  




// ESERCIZIO 1
// La funzione accetta in ingresso la stringa e un numero di righe, in questo caso e' stata invocata cosi: converti("PAYPALISHIRING", 3)
function zigzag(parola,rows){
    let zigzag=''
    
    return zigzag
}

console.log(zigzag("PAYPALISHIRING", 3));