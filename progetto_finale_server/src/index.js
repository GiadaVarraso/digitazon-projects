import {
  newCorso,
  getCorsi,
  getCorso,
  deleteCorso,
  modificaCorso
} from './routesCorsi.mjs'
import {
  newPrenotazione
  ,getPrenotazioni
  ,getPrenotazione
  ,deletePrenotazione
  ,modificaPrenotazione
} from './routesPrenotazioni.mjs'
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors())

const port = 8000;

app.get('/', (req, res) => {
  res.send('Benvenuto nel server ASKII Sport!\n'
    + "\nROTTE DISPONIBILI:"
    + "\nCORSI:"

    + "\nPOST corso"
    + "\nGET corso"
    + "\nGET corsi"
    + "\nDELETE corso"
    + "\nPUT corso"

    + "\nPRENOTAZIONI:"

    + "\nPOST prenotazione"
    + "\nGET prenotazione"
    + "\nGET prenotazioni"
    + "\nDELETE prenotazione"
    + "\nPUT prenotazione"
    //TODO aggiungere crud eventi per galleria 'bacheca eventi' e galleria 'immagini servizi'
  );
});
// crud corsi
app.post('/corsi', newCorso)
app.get('/corsi', getCorsi)
app.get('/corsi/:id', getCorso)
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