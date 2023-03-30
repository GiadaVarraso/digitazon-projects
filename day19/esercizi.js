
// ex 1
// trovare la stringa più lunga tra due stringhe salvate in 2 variabili e stamparla in output con l'aggiunta del messaggio 'la stringa più lunga è:'
{

let a='sasso'
let b='sei un sasso'

if( a.lenght > b.lenght){
	console.log("la stringa piu lunga è:'" + a + "'")
}else if ( a.lenght = b.lenght){
	console.log('le stringhe sono lunghe uguali')
}else {
	console.log("la stringa piu lunga è:'" + b + "'")
}

}

// ex 2
// crea una variabile stringa con un valore a piacere e stampa i suoi caratteri invertiti separati da -, su un'unica riga
// es mela -> a-l-e-m
{
let m= 'mela'

let result=""
let space= "-"

result= m.charAt(3)+space+m.charAt(2)+space+m.charAt(1)+space+m.charAt(0)

console.log(result)
}



// ex 3
// crea due variabili x e y con valori a piacere.
// se x è minore o uguale a y, stampa green.
// in quel contesto se y è uguale a zero, stampa red.
// se è maggiore di y, stampa blue
{

	let x=1
	let y=0
	
	if (x>=y){
		console.log('green')
		if (y==0){
		console.log('red')
	}
} 
else {
	console.log('blue')
}

}

// ex 4
// date due variabili con valori 'kiwi' e 'banana', stampa in output
// il seguente risultato (la prima e la terza lettera della prima string concatenata ad un underscore e alla seconda stringa maiuscola):
// kw_BANANA

{
	let k= 'kiwi'
	let b= 'banana'

	console.log(  k.charAt(0) 
				+ k.charAt(2) 
				+ "_" 
				+ b.toUpperCase() 
				)
}

// ex 5
// crea un complesso di controlli condizionali a piacere per stampare in output un risultato, a patto di utilizzare:
// almeno un else-if, almeno un if innestato, almeno una comparazione per valore di stringa
{
	let x=10
	let y=9
	let permesso='concesso'
	if (x > y) {
		console.log('entro nel primo if')
		 if(permesso != 'negato'){
			console.log("entro nel secondo if perchè l accesso è: "+ permesso.toUpperCase())
		 }
	}else {
		console.log("non entro nell if perche "+ x +"risulta maggiore di " + y)
	}
	
}
