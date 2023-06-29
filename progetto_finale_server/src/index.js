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
import { getImgs } from './routesImgs.mjs'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();
app.use(bodyParser.json())
app.use(cors())
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

    + "\nIMMAGINI:"

    + '\nGET img http://localhost:8000/images/:fileName.ext'
    + '\nGET imgs http://localhost:8000/images'
    + '\nPOST img http://localhost:8000/upload (payload type=form-data, key=image , type=File, value=[.jpg, .jpeg, .png, .gif]'

    + "\nISTRUTTORI:"

    + "\nPOST istruttore          http://localhost:8000/istruttori"
    + "\nGET istruttore           http://localhost:8000/istruttori/:id"
    + "\nGET istruttori all       http://localhost:8000/istruttori"
    + "\nDELETE istruttore        http://localhost:8000/istruttori/:id"
    + "\nPUT istruttori           http://localhost:8000/istruttori/:id"
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
// TODO: collegare i corsi con l id degli istruttori
app.post("/istruttori", postIstruttore)
app.get("/istruttori/:id", getIstruttoreByid) 
app.get("/istruttori", getIstruttori)
app.delete("/istruttori/:id", deleteIstruttore) //TODO: SE UN ISTRUTTORE HA UN CORSO? cancellare prima i corsi relativi
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

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});