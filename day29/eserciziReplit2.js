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
  console.log(alfabetoStrambo('funziona solo con vocali alla fine'))
  
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata algebra che 
  // dato un array di interi
  // ritorni il prodotto degli elementi di indice pari a cui vengono
  // sottratti tutti gli elementi di indice dispari
  
  // ad esempio: con [1, 2, 3, 4] ritornerebbe 3 - 6 = -3
  
  function algebra(arr) {
    let par=1
    let dis=0
    for (let i = 0; i < arr.length; i++) {
        if(i%2==0){
            par*=arr[i]
        }else {
            dis+=arr[i]
        }
    }
    return par-dis
  }

  let ar=[1,2,3,4]
  console.log(algebra(ar))
  
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
    let aRes=[]
        for (let i = 0; i < arr.length; i=i+2) {
            let secondo=arr[i+1]
            let primo=arr[i]
            if(secondo == undefined){
                aRes.push(primo)
                return aRes
            }
            aRes.push(secondo)
            aRes.push(primo)
        }
    return aRes
  }
//   let numInt=[5, 6] 
//   let numInt=[1, 2, 3, 4]
  let numInt=[7, 8, 9]
  console.log(arraySwap(numInt)); 
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata concatAll che 
  // dato in ingresso un numero variabile di array
  // ritorni un nuovo array che e' la concatenazione di tutti gli array
  // passati
  
  // ad esempio: con [1] [2] [3] ritornerebbe [1,2,3]
  // ad esempio: con [1, 2, 3, 4] ritornerebbe [1, 2, 3, 4]
  // ad esempio: con [1, 2, 3] [1, 2] [3] ritornerebbe [1, 2, 3, 1, 2, 3]
  console.log('CONCATALL');

  function concatAll(...arrs) {
    let aRes=[]
    for (let i = 0; i < arrs.length; i++) {
        for(let j = 0; j < arrs[i].length; j++){
            aRes.push(arrs[i][j])
        }
    }
    return aRes
  }
//  versione Emanuele mod
  // function concatAll2(...arrs) {
  //   let matrix=[]
  // matrix += arrs; //comportamento oscuro di js ... non basarsi su questo
  //   console.log(arrs)
  //   return matrix.split(',')
  // }

//   console.log(concatAll([4, 6], [7], [2, 8]));
//   console.log(concatAll([7], [4, 6, 9, 10], [8888]));

  let a1=[1,2,3]
  let a2=[4,5,6]
  let a3=[7,8,9]
  let a4=[10,11,12,13]
  let start = new Date().getTime()
  console.log(concatAll(a1,a2,a3,a4))
  console.log("PRIMA", new Date().getTime() - start)
  start = new Date().getTime()
  console.log(concatAll2(a1,a2,a3,a4))
  console.log("SECONDA", new Date().getTime() - start)
  
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
    let ar=[]
    // return ar.sort((a,b)=>a-b)  // v1 

    // v2 START
    let arSort=[]
    // riempo ar con i numeri randomici
    for (let i = 0; i < n; i++) {
        ar.push(Math.random())
    }
    console.log(ar)
    // li pusho in ordine in arSort
    while(arSort.length!=n){
        for (let i = 0; i < ar.length; i++) {
            let count=0
            for (let j = 0; j < ar.length; j++) {
                if(ar[i]<ar[j]){
                    count++
                }else{
                    continue
                }
            }
            if (count==ar.length-1){
                arSort.push(ar[i])
                ar.splice(ar.indexOf(ar[i]),1)
            }
        }
    }
    return arSort
    // v2 END
  }
  let numero=7
  console.log(createRandomSortedArray(numero));
  
  

  console.log('********************************************');
  
  // scrivere una funzione chiamata firstMatrix che 
  // dato un array e un numero n
  // ritorni una matrice con l'array riprodotto n volte
  
  // ad esempio con [1,2,3] e 3 ritorna [[1,2,3],[1,2,3],[1,2,3]]
  // ad esempio con [1,2] e 1 ritorna [1,2]
  // ad esempio con [1,2,3,4] e 0 ritorna []
  
  function firstMatrix(arr, n) {
    let matrix=[]
    for (let i = 0; i < n; i++) {
        matrix.push(arr)
    }
    return matrix
  }
    
   let ar1=[1,2,3]
// let ar1=[1,2]
// let ar1=[1,2,3,4]
    let num=3
// let num=1
// let num=0
  console.log(firstMatrix(ar1,num))
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata intersection che 
  // dati due array di interi
  // ritorni un array che rappresenti l'intersezione di questi array
  
  // ad esempio con [1,2,3] e [4,5,6] ritorna []
  // ad esempio con [1,2] e [2,3] ritorna [2]
  
  
    function intersection(a, b) {
        let aRes=[]
        for (let i = 0; i < a.length; i++) {
            const elA = a[i];
            if(b.includes(elA)){
                aRes.push(elA)
            }
        }
        return aRes
    }
//  let aInt1=[1,2,3]
//  let aInt1=[1,2]
 let aInt1=[1,2,3,4]
//  let aInt2= [4,5,6]
//  let aInt2= [2,3]
 let aInt2= [2,3,4,5,6]
    console.log(intersection(aInt1,aInt2));
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata isHomogeneous che 
  // dato un array di elementi in ingresso
  // ritorni true se l'array contiene elementi tutti dello stesso tipo
  // o false altrimenti
  
  function isHomogeneous(arr) {
    let firstType=typeof arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(typeof arr[i] != firstType){
            return false
        }
    }
    return true
  }
//   let ar2=[1,'ciao',2,3,4]
  let ar2=[1,2,3,4]
  console.log(isHomogeneous(ar2));
  
  console.log('********************************************');
  
  // scrivere una funzione chiamata largestSwap
  // che prende in ingresso un numero di due cifre,
  // ritorna true se e' il piu' grande dei due possibili scambi di
  // cifre, false altrimenti
  
  // ad esempio per 27 deve ritornare false perche' posso invertire 
  // le due cifre per ottere 72
  // ad esempio per 43 deve ritornare true perche' 34 sarebbe minore
  
  function largestSwap(n) {
        let string = n.toString()
        let numeroInvert = ''
        console.log(string);

        for (let i = string.length -1; i >=0; i--) {
          numeroInvert+= string[i]
        }

        if (numeroInvert > n) {
          return false
        } else if (numeroInvert == n){
          return 'i numeri della cifra sono uguali'
        }
          return true
      }
      console.log(largestSwap(67));
      console.log(largestSwap(76));
      console.log(largestSwap(77));
  
    console.log('********************************************');
  
  // scrivere una funzione chiamata mapsUnion che 
  // date due mappe (in JS chiamate anche oggetti) in ingresso
  // ritorni una mappa (o oggetto) che contenga tutte le chiavi e 
  // tutti i valori delle due mappe
  // in caso di chiavi duplicate deve rimanere il valore della 
  // seconda mappa (o oggetto)
  
  // e' una funzione che volendo si puo' scrivere in una riga sola
  
  function mapsUnion(m1, m2) {
    m1.forEach( (v,k) => { if (!m2.has(k)) m2.set(k,v) })
    return m2
  }

  let mapy = new Map ([['name','tony'],['surname', 'bis'],['age',23]])
  let mapet = new Map ([['name','giga'],['nickname', 'biggy'],['bornY',1995]])
  console.log(mapsUnion(mapy,mapet))
  
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
  
  console.log(reverse('ciao'))
  
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
  
  console.log(union([1,2,3],[1,2,4,5,6,7]))
