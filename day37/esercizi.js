// esempio funzione reduce
function sumAll(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0)
  }
  
  sumAll(0,1,2,3,4,5,6)
  sumAll(1,41)
  sumAll(1)


// ESERCIZIO 1
console.log('esercizio 1\n');
// La funzione accetta in ingresso la stringa e un numero di righe, in questo caso e' stata invocata cosi: converti("PAYPALISHIRING", 3)
function zigzag(parola,rows){
    let zigzag=''
    
    return zigzag
}

console.log(zigzag("PAYPALISHIRING", 3));
console.log('\n\nesercizio 2\n');

// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

function findLongestSubstring1(s){
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


function findLongestSubstring2(s) {
    let parola = ''
    let res = ''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if (parola.includes(lettera)) {
            if (parola.length > res.length) {
                res = parola
            }
            parola = parola.substring(parola.indexOf(lettera)+1, i)
        } else {
            parola += lettera
        }
    }
    if (parola.length > res.length) {
        res = parola
    }
    return res
}

console.log('\nVersione 1:')
console.log(findLongestSubstring1('stringaaacciu')); //stringa
console.log(findLongestSubstring1('abcabcbb'));      // abc
console.log(findLongestSubstring1('casessssroma')); // sroma
console.log(findLongestSubstring1('pwwkew')); // wke o kew
console.log(findLongestSubstring1('abcabicbb')); //cabi
console.log(findLongestSubstring1('abcdecfghil')); //decfghil

console.log('\n\nVersione 2 in classe:')
console.log(findLongestSubstring2('stringaaacciu')); //stringa
console.log(findLongestSubstring2('abcabcbb'));      // abc
console.log(findLongestSubstring2('casessssroma')); // sroma
console.log(findLongestSubstring2('pwwkew')); // wke o kew
console.log(findLongestSubstring2('abcabicbb')); //cabi
console.log(findLongestSubstring2('abcdecfghil')); //decfghil


