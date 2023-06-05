import { 
  hello, 
  cCGet, 
  cCResearch, 
  cCGetId, 
  cCDelete, 
  cCModify, 
  cCPost
} from './routesCC.mjs'
import { cCFilms } from './routesFilm.mjs'
import express from 'express' //npm intall express . node package manager
const app = express()          
import  bodyParser from 'body-parser' //npm intall
app.use(bodyParser.json())  // bodyParser ricava il body della richiesta http , sotto forma di json
const port = 3000  //serve per definire in quale porta il nostro server deve esistere e rimanere in ascolto

app.get('/', hello) //path principale

app.get('/case-cinematografiche', cCGet)
app.get('/case-cinematografiche/ricerca/:termine', cCResearch)
app.get('/case-cinematografiche/:id', cCGetId)
app.delete('/case-cinematografiche/:id', cCDelete)
app.put('/case-cinematografiche/:id', cCModify)
app.post("/case-cinematografiche", cCPost)

app.get('/case-cinematografiche/:id/films', cCFilms)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

