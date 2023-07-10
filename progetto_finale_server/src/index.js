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
import {
  postIstruttore
  , getIstruttoreByid
  , getIstruttori
  , deleteIstruttore
  , modificaIstruttore
} from './routesIstruttori.mjs'
import {
  newServizio,
  getServizi,
  deleteServizio,
  modificaServizio
} from './routesServizi.mjs'
import { getImgs } from './routesImgs.mjs'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();
app.use(bodyParser.json())
app.use(cors())
import storicizzaPrenotazioni from './storicizzazione.mjs'

import cron from 'node-cron'
cron.schedule('53 18 * * *', storicizzaPrenotazioni)

import multer from 'multer'

const storage = multer.diskStorage({
  destination: 'imgs/',
  filename: function (req, file, cb) {
    const extension = file.originalname.split('.').pop();
    const uniqueFileName = Date.now() + '.' + extension;
    cb(null, uniqueFileName);
  }
});

const upload = multer({ storage: storage });

const port = 8000;

app.get('/', (req, res) => {
  res.send('Benvenuto nel server ASKII Sport!\n'
    + "\nROTTE DISPONIBILI:"
    + "\nCORSI:"

    + "\nPOST corso    http://localhost:8000/corsi"     //IN USO
    + "\nGET corso     http://localhost:8000/corsi/:id"
    + "\nGET corsi     http://localhost:8000/corsi"     //IN USO
    + "\nDELETE corso  http://localhost:8000/corsi/:id" //IN USO
    + "\nPUT corso     http://localhost:8000/corsi/:id" //IN USO

    + "\nPRENOTAZIONI:"

    + "\nPOST prenotazione          http://localhost:8000/corsi/:id/prenotazioni"        //IN USO
    + "\nGET prenotazioni corso     http://localhost:8000/corsi/:id/prenotazioni"
    + "\nGET prenotazioni all       http://localhost:8000/prenotazioni"                  //IN USO
    + "\nGET prenotazione           http://localhost:8000/corsi/:idC/prenotazioni/:idP"
    + "\nDELETE prenotazione        http://localhost:8000/corsi/:idC/prenotazioni/:idP"  //IN USO
    + "\nPUT prenotazione           http://localhost:8000/corsi/:idC/prenotazioni/:idP"

    + "\nIMMAGINI:"

    + '\nGET img http://localhost:8000/images/:fileName.ext'
    + '\nGET imgs http://localhost:8000/images'              //IN USO
    + '\nPOST img http://localhost:8000/upload (payload type=form-data, key=image , type=File, value=[.jpg, .jpeg, .png, .gif]'

    + "\nISTRUTTORI:"

    + "\nPOST istruttore          http://localhost:8000/istruttori"
    + "\nGET istruttore           http://localhost:8000/istruttori/:id"
    + "\nGET istruttori all       http://localhost:8000/istruttori"     //IN USO
    + "\nDELETE istruttore        http://localhost:8000/istruttori/:id"
    + "\nPUT istruttori           http://localhost:8000/istruttori/:id"

    + "\nSERVIZI:"

    + "\nPOST servizio         http://localhost:8000/servizi"
    + "\nGET servizi all       http://localhost:8000/servizi"
    + "\nDELETE servizio       http://localhost:8000/servizi/:id"
    + "\nPUT servizio          http://localhost:8000/servizi/:id"
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
app.get('/prenotazioni', getPrenotazioni)
app.get('/corsi/:id/prenotazioni', getPrenotazioniByCorso);
app.get('/corsi/:idC/prenotazioni/:idP', getPrenotazione)
app.delete('/corsi/:idC/prenotazioni/:idP', deletePrenotazione)
app.put('/corsi/:idC/prenotazioni/:idP', modificaPrenotazione)
// crud istruttori
app.post("/istruttori", postIstruttore)
app.get("/istruttori/:id", getIstruttoreByid)
app.get("/istruttori", getIstruttori)
app.delete("/istruttori/:id", deleteIstruttore)
app.put("/istruttori/:id", modificaIstruttore)

//Immagini
app.use('/images', express.static('imgs'));

app.get('/images', getImgs);

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Immagine caricata con successo');
});

// Con questa configurazione, puoi inviare una richiesta POST 
// a http://localhost:8000/upload includendo un campo 'image' nel corpo
// della richiesta contenente il file immagine da caricare.

// crud servizi
app.post('/servizi', newServizio) //TODO
app.get('/servizi', getServizi)   // IN USO 
app.delete('/servizi/:id', deleteServizio) //TODO
app.put('/servizi/:id', modificaServizio)  //TODO

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
