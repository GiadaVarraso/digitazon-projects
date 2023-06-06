import fs from 'node:fs/promises' // si importa fs (filesystem) da node, si noti che si abilita il server alle promises, essenziale per permettere al servere di gestire chiamate asincrone da piu client nello stesso tempo (questo concetto necessita di un approfondimento)
import axios from 'axios'
import students from '../db/students.json' assert { type: 'json' } // qui importiamo il contenuto del file json, dal database, si specifica con assert che il tipo è json, cosa necessaria
import allStudents from '../db/digitazonAll.json' assert { type: 'json' }
import { log } from 'node:console'
const DB_PATH = './db/digitazonAll.json' // per comodità si crea una variabile che identifica il path, si noti la diversità rispetto alla path di importazione: nell'importazione si specifica il path da dove si trova questo file dove scriviamo codice, nel secondo caso, con due "..", si specifica il path da dove la funzione è chiamata, cioè dal file index. prestare attenzione a questo particolare non così immediato

/*let NEXT = Object
  .keys(users)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0) // qui si crea una variabile che rappresenta l'ultimo elemento, rappresetnato dal numero id che si trova nella struttura dati, essenziale in caso di post. in particolare con il metodo keys abbiamo un array di chiavi dell'oggetto users, poi con reduce troviamo l'id con numero più grande
*/

export const getGroup = (req, res) => {
  res.send(students)
  res.status(200)
}

export const getAll = async (req, res) => {
  // chiamata al nostro stesso gruppo 
  let response = await axios.get('http://localhost:8000/digitazon/2023/02/group/3/students')
  let all = []
  response.data.forEach(element => {
    all.push(element)
  });
  
  // chiamata al gruppo 1
  // response = await axios.get('https://5e81-2001-b07-a9a-89a8-fc69-90ae-c7c4-8dbc.ngrok-free.app/digitazon/2023/02/group/1/students')
  // response.data.forEach(element => {
  //   all.push(element)
  // });
   
  // chiamata al gruppo 2
  // response = await axios.get('https://698d-37-162-141-71.ngrok-free.app/digitazon/2023/02/group/2/students')
  // response.data.forEach(element => {
  //   all.push(element)
  // });
  
  // chiamata al gruppo 4
  // response = await axios.get('https://f151-93-41-116-144.ngrok-free.app/digitazon/2023/02/group/3/students')
  //response.data.forEach(element => {
  //   all.push(element)
  // });
  await fs.writeFile(DB_PATH, JSON.stringify(all, null, '  '))  
  // con npm run dev alla prima chiamata non ha ancora terminato la scrittura del file.
  // funziona solo con npm start . perchè? 
  //ritestando successivamente non riesco piu a ricreare la situazione con {} in all che funziona 
  //alla prima chiamata con npm start
  res.send(allStudents)
  res.status(200)
}




