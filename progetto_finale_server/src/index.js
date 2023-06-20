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
  , getPrenotazioniByCorso
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

    + "\nPOST prenotazione          http://localhost:8000/corsi/:id/prenotazioni"
    + "\nGET prenotazioni corso     http://localhost:8000/corsi/:id/prenotazioni"
    + "\nGET prenotazioni all       http://localhost:8000/prenotazioni"
    + "\nGET prenotazione           http://localhost:8000/corsi/:idC/prenotazioni/:idP"
    + "\nDELETE prenotazione        http://localhost:8000/corsi/:idC/prenotazioni/:idP"
    + "\nPUT prenotazione           http://localhost:8000/corsi/:idC/prenotazioni/:idP"
    //TODO aggiungere crud eventi per galleria 'bacheca eventi' e galleria 'immagini servizi'
  );
});
// crud corsi
app.post('/corsi', newCorso) //DONE
app.get('/corsi', getCorsi)  //DONE
app.get('/corsi/:id', getCorso) //DONE
app.delete('/corsi/:id', deleteCorso) //DONE
app.put('/corsi/:id', modificaCorso) //DONE
//crud prenotazioni
app.post('/corsi/:id/prenotazioni', newPrenotazione) //DONE
app.get('/prenotazioni', getPrenotazioni) //DONE
app.get('/corsi/:id/prenotazioni', getPrenotazioniByCorso); //DONE
app.get('/corsi/:idC/prenotazioni/:idP', getPrenotazione) //DONE
app.delete('/corsi/:idC/prenotazioni/:idP', deletePrenotazione) //DONE
app.put('/corsi/:idC/prenotazioni/:idP', modificaPrenotazione) //DONE

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});