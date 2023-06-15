// const express = require('express');   // import non piu coerente con "type": "module" 

// in package.json
// 1. per poter fare  import ... from "..."   aggiungere "type": "module" 
// 2."dev": "nodemon index.js"  per startare il server in dev mode
//   oppure "dev": "nodemon -w src src/index.js"    (dal terminale npm run dev)
//     nodemon è il comando per avviare il server utilizzando Nodemon.
//     bisogna installare npm install nodemon
//     -w src è un opzione che indica a Nodemon di monitorare i file nella cartella "src" per eventuali modifiche. Puoi specificare altre cartelle separate da spazi se desideri monitorare più cartelle.
// 3."start": "node index.js"  per startare il server in prod mode
import express from 'express';   // import coerente con "type": "module" 
//Express è un framework web per Node.js che semplifica la creazione di un server HTTP e la gestione delle richieste e delle risposte.
const app = express();

// import bodyParser from 'body-parser'
// app.use(bodyParser.json())

// Configurazione di CORS (Cross-Origin Resource Sharing) per consentire le richieste da origini diverse
import cors from 'cors'
app.use(cors());
/* Il middleware CORS aggiunge gli header necessari per consentire le richieste 
  da origini diverse, in modo che il browser possa accettarle senza applicare
  la Same-Origin Policy. (default, che darebbe un errore) */

import {
  getPosts,
  writeFile,
  readFile
} from "./routesPosts.mjs" 

const port = 8000; 

// defalut path
app.get('/', (req, res) => { 
  res.send('Hello World!');
});

//get a endpoint 
app.get('/posts',getPosts)


//scrittura e lettura file
app.get('/writeFile',writeFile)
app.get('/readFile',readFile)


// // Middleware personalizzato
const customMiddleware = (req, res, next) => {
  console.log('Questo è un middleware personalizzato.');
  next();
};
// Applica il middleware a tutte le route
app.use(customMiddleware);
// Route di esempio
app.get('/api/example', (req, res) => {
  res.send('Esempio di route con middleware.');
});


// Autenticazione tramite l utilizzo di un middleware
// Middleware per l'autenticazione
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Autenticazione richiesta.' });
  }
  // recupero il valore dell'autenticazione
  const token = authHeader.split(' ')[1];
  if (token !== 'toktok') {
    // se il client passa nell'header della chiamata l'autenticazione 'toktok'
    return res.status(401).json({ error: 'Token di autenticazione non valido.' });
  }
  next(); // passa al prossimo middleware o gestore di route
};
// Utilizzo del middleware di autenticazione
app.get('/private', authenticate, (req, res) => {
  res.json({ message: 'Hai accesso alla risorsa privata.' });
});



app.listen(port, () => {  
 console.log(`Il server è in ascolto sulla porta ${port}`); 
});