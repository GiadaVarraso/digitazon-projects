import {
  newCorso,
  getCorsi,
  getCorso,
  deleteCorso,
  modificaCorso
} from './routesCorsi.mjs'
import {
  newPrenotazione
  , getPrenotazioni
  , getPrenotazione
  , deletePrenotazione
  , modificaPrenotazione
} from './routesPrenotazioni.mjs'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();
app.use(bodyParser.json())
app.use(cors())

const port = 8000;

app.get('/', (req, res) => {
  res.send('Benvenuto nel server ASKII Sport!\n'
    + "\nROTTE DISPONIBILI:"
    + "\nCORSI:"

    + "\nPOST corso    http://localhost:8000/corsi"
    + "\nGET corso     http://localhost:8000/corsi/:id"
    + "\nGET corsi     http://localhost:8000/corsi"
    + "\nDELETE corso  http://localhost:8000/corsi/:id"
    + "\nPUT corso     http://localhost:8000/corsi/:id"

    + "\nPRENOTAZIONI:"

    + "\nPOST prenotazione    http://localhost:8000/corsi/:id/prenotazioni"
    + "\nGET prenotazione     http://localhost:8000/corsi/:id/prenotazioni"
    + "\nGET prenotazioni     http://localhost:8000/corsi/:idC/prenotazioni/:idP"
    + "\nDELETE prenotazione  http://localhost:8000/corsi/:idC/prenotazioni/:idP"
    + "\nPUT prenotazione     http://localhost:8000/corsi/:idC/prenotazioni/:idP"
    //TODO aggiungere crud eventi per galleria 'bacheca eventi' e galleria 'immagini servizi'
  );
});
// crud corsi
app.post('/corsi', newCorso) 
app.get('/corsi', getCorsi)  //DONE
app.get('/corsi/:id', getCorso) //DONE
app.delete('/corsi/:id', deleteCorso)
app.put('/corsi/:id', modificaCorso)
//crud prenotazioni
app.post('/corsi/:id/prenotazioni', newPrenotazione)
app.get('/corsi/:id/prenotazioni', getPrenotazioni)
app.get('/corsi/:idC/prenotazioni/:idP', getPrenotazione)
app.delete('/corsi/:idC/prenotazioni/:idP', deletePrenotazione)
app.put('/corsi/:idC/prenotazioni/:idP', modificaPrenotazione)

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});