console.log('\n\n________ ESERCIZIO 1 __________')
// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve ritornare una matrice quadrata lunga l 
// contenente '#' e ' ', opportunamente alternati, che rappresentino 
// una scacchiera di lato l 

// la prima casella deve essere un '#'

function chessboard(l) {
    let scacchiera=[]
    let rigaPari=true
  
    function riga(l,rigaPari){
      let res=[]
      let pari=true
      if(rigaPari){
        for (let i = 0; i < l; i++) {
        res.push(pari?'#':' ')
        pari=!pari
        } 
      }else{
        for (let i = 0; i < l; i++) {
        res.push(pari?' ':'#')
        pari=!pari
        }
      }  
      
      return res
  }
    
    for (let i = 0; i < l; i++) {
      scacchiera.push(riga(l,rigaPari))
      rigaPari=!rigaPari
    }
    return scacchiera 
  }
  
  console.log(chessboard(6))

  console.log('\n\n________ ESERCIZIO 2 __________')

    // scrivere una funzione chiamata filterString
    // che prende in ingresso una funzione e una stringa
    // la funzione filterString deve ritornare una nuova stringa
    // le cui lettere sono presenti solo se 
    // l'applicazione della funzione alla i-esima lettera
    // restituisce true

    // ad esempio per l => l == "a" e "abc" deve 
    // ritornare "a"
    // ad esempio per l => l == "c" e "bbbbb" deve 
    // ritornare ""
    // ad esempio per l => l != "c"e "cabbac"  deve 
    // ritornare "abba"

  function filterString(funx, str) {
    let res=''
    for(let i =0; i<str.length; i++){
      if(funx(str[i])) {
        res+=str[i]
      }  
    }
    return res
  }
  
  console.log(filterString( l => l == "a", 'abc'))
  console.log(filterString( l => l == "c", 'bbbbb'))
  console.log(filterString( l => l != "c", 'cabbac'))

  console.log('\n\n________ ESERCIZIO 3 __________')

  function findLongestSubstring(s){
    let parola=''
    let res=''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if(parola.includes(lettera)){
            if(parola.length>res.length){
                res=parola
            }
            parola=parola.substring(parola.indexOf(lettera)+1)+lettera
        }else{
            parola+=lettera
        }
    }
    if(parola.length>res.length){
        res=parola
    }
    return res
}
console.log(findLongestSubstring('stringaaacciu')); //stringa
console.log(findLongestSubstring('abcabcbb'));      // abc
console.log(findLongestSubstring('casessssroma')); // sroma
console.log(findLongestSubstring('pwwkew')); // wke o kew
console.log(findLongestSubstring('abcabicbb')); //cabi
console.log(findLongestSubstring('abcdecfghil')); //decfghil

  console.log('\n\n________ ESERCIZIO 4 __________')
  console.log('\n\n________ ESERCIZIO 5 __________')
  console.log('\n\n________ ESERCIZIO 6 __________')
  console.log('\n\n________ ESERCIZIO 7 __________')
  console.log('\n\n________ ESERCIZIO 8 __________')
  console.log('\n\n________ ESERCIZIO 9 __________')
  console.log('\n\n________ ESERCIZIO 10 __________')
  console.log('\n\n________ ESERCIZIO 11 __________')