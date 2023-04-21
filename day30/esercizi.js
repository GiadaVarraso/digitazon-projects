
/*
Ex 1
Realizzare l'apposita strategia per stampare la stringa 'Riccardo' invertita in output.
Tempo massimo: 5 minuti
*/

let stringa='riccardo'
function invert(s){
    let res=''
    for (let i = s.length-1; i >= 0; i--) {
        const el = s[i];
        res+=el
    }
    return res
}
console.log(invert(stringa))


/* Ex 2
data la stringa 'Riccardo'
stampare in output l'ultimo carattere maiuscolo concatenato a un underscore e al primo carattere minuscolo:

O_r 
*/

// creo una stringa 'riccardo'
// creo una stringa result vuota
// prelevo il carattere alla posizione  lenght-1 della stringa e lo trasformo in maiuscolo
// prelevo il carattere che si trova alla posizione 0 e lo trasformo in minuscolo
// concateno i due caratteri con un _ utilizzando il + 
// memorizzo il risultato in result

let s='Riccardo'
let result=s.charAt(s.length-1).toLocaleUpperCase() + '_' + s.charAt(0).toLocaleLowerCase()
console.log(result);

/*
  Ex 3
  rappresentare, tramite oggetto, uno studente. Lo studente avrà:
  idMatricola: 14
  nomeCompleto: Luigi Verdi
  voti: 6, 7, 7
  
  Stampare in output la stringa tramite apposito algoritmo:
  
  il terzo voto dello studente con id 14 (Luigi Verdi) è 7
  
  */

  let studente={
    idMatricola: 14,
    nomeCompleto: 'Luigi Verdi',
    voti:  [6, 7, 7]
  }

  console.log(`il terzo voto dello studente con id ${studente.idMatricola} (${studente.nomeCompleto}) è ${studente.voti[2]}`);


//   scrivere pseudocodice
// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve stampare una scacchiera di lato l
// contenente '#' e ' ', opportunamente alternati

//devo farmi una variabile res
// faccio un ciclo
//devo iterare in base al numero 
//ad ogni giro devo aggiungere a res un cancelletto

function Chessboard(size) {
    let board = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 == 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        board += '\n';
    }
    console.log(board);
}
Chessboard(9);

// # #
//  # 
// #  #