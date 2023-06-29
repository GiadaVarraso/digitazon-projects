import fs from 'node:fs/promises';

const DB_PATH_CORSI = 'db/corsi.json'
const DB_PATH_PRENOTAZIONI = 'db/prenotazioni.json'

async function nextPrenotazioneId() {
  const content = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
  const currentId = content.reduce((accumulator, p) => accumulator > p.idPrenotazione ? accumulator : p.idPrenotazione, 1);
  const nextId = currentId + 1;
  return nextId;
}
function dataCreazione() {
  const now = new Date()
  const giorno = now.getDate()
  const mese = now.getMonth() + 1
  const anno = now.getFullYear() % 100

  const ora = now.getHours();
  const minuti = now.getMinutes();

  // Formatta la data in gg/MM/YY
  const nowFormatDate = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`
  
  // Formatta l'orario in hh:mm
  const nowFormatTime = `${ora.toString().padStart(2, '0')}:${minuti.toString().padStart(2, '0')}`;

  const dateCreazione={dataCreazione: {
    "data": `${nowFormatDate}`,
    "orario": `${nowFormatTime}`
   }
  }
  return dateCreazione
}

const newPrenotazione = async (req, res) => {
  try {
    const contentPrenotazioni = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
    const idPrenotazione = await nextPrenotazioneId();
    const idCorso = parseInt(req.params.id);

    const contentCorsi = JSON.parse(await fs.readFile(DB_PATH_CORSI))
    const index = contentCorsi.findIndex(c => c.id == idCorso)

    if (index === -1) {
      res.send({
        data: {},
        error: true,
        message: `Impossibile aggiungere prenotazione.Corso con ID ${idCorso} non trovato`
      }).status(404)
      return
    }

    const prenotazioni = contentPrenotazioni.filter(p => p.idCorso == idCorso);
    if(prenotazioni.length >= contentCorsi[index].postiDisponibili){
      res.send({
        data: {},
        error: true,
        message: `Impossibile aggiungere prenotazione.Raggiunto limite massimo di prenotazioni per il corso ${idCorso}`
      }).status(400)
      return
    }

    // la prenotazione NON puo' essere effettuata il giorno stesso del corso (sono prenotazioni settimanali)
    const now = new Date()
    const numeroGiorno = now.getDay()
    const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    const giornoSettimana = giorniSettimana[numeroGiorno];

    if(giornoSettimana == contentCorsi[index].giorno){
      res.send({
        data: {},
        error: true,
        message: `Impossibile aggiungere prenotazione.La prenotazione NON puo' essere effettuata il giorno stesso del corso`
      }).status(400)
      return
    }

    const prenotazione = { idPrenotazione, idCorso, ...dataCreazione() , ...req.body }
    contentPrenotazioni.push(prenotazione);
    await fs.writeFile(DB_PATH_PRENOTAZIONI, JSON.stringify(contentPrenotazioni, null, " "));

    res.status(201).send({
      message: 'La richiesta è stata elaborata con successo, nuova prenotazione creata'
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Prenotazione non aggiunta. Errore nel server' });
  }
};

const getPrenotazioni = async (req, res) => {
  try {
    const content = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
    const prenotazioni = content;

    res.send( prenotazioni );
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Errore nel server'
    });
  }
};

const getPrenotazioniByCorso = async (req, res) => {
  try {
    const content = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
    const idCorso = parseInt(req.params.id);
    const prenotazioni = content.filter(p => p.idCorso === idCorso);
    if (prenotazioni.length==0){
        res.send({
          data: {},
          error: true,
          message: `Prenotazioni per il corso ${idCorso} non trovate`
        });
        return;      
    }
    res.send( prenotazioni );
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Errore nel server'
    });
  }
};

const getPrenotazione = async (req, res) => {
  try {
    const content = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
    const idCorso = parseInt(req.params.idC);
    const idPrenotazione = parseInt(req.params.idP);

    const prenotazione = content.find(p => p.idCorso === idCorso && p.idPrenotazione === idPrenotazione);
    if (prenotazione) {
      res.send( prenotazione );
    } else {
      res.status(404).send({
        data: {},
        error: true,
        message: `Prenotazione con ID ${idPrenotazione} non trovata per il corso con ID ${idCorso}`
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Errore nel server'
    });
  }
};

const deletePrenotazione = async (req, res) => {
  try {
    const content = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
    const idCorso = parseInt(req.params.idC);
    const idPrenotazione = parseInt(req.params.idP);

    const index = content.findIndex(p => p.idCorso == idCorso && p.idPrenotazione == idPrenotazione);
    if (index === -1) {
      res.status(404).send({
        data: {},
        error: true,
        message: `Prenotazione con ID ${idPrenotazione} non trovata per il corso con ID ${idCorso}`
      });
      return;
    }

    content.splice(index, 1);
    await fs.writeFile(DB_PATH_PRENOTAZIONI, JSON.stringify(content, null, ' '));
    res.status(204).send({ message: 'Prenotazione cancellata' });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Cancellazione non avvenuta. Errore nel server'
    });
  }
};

const modificaPrenotazione = async (req, res) => {
  try {
    const content = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
    const idCorso = parseInt(req.params.idC);
    const idPrenotazione = parseInt(req.params.idP);

    const index = content.findIndex(p => p.idCorso === idCorso && p.idPrenotazione === idPrenotazione);
    if (index === -1) {
      res.status(404).send({
        data: {},
        error: true,
        message: `Prenotazione con ID ${idPrenotazione} non trovata per il corso con ID ${idCorso}`
      });
      return;
    }

    const oldPrenotazione = content[index];
    const newPrenotazione = { ...oldPrenotazione, ...req.body };
    content[index] = newPrenotazione;

    await fs.writeFile(DB_PATH_PRENOTAZIONI, JSON.stringify(content, null, ' '));
    res.status(200).send({ message: 'Prenotazione modificata correttamente' });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Modifica della prenotazione non avvenuta. Errore durante la scrittura del file.'
    });
  }
};

export {
  newPrenotazione,
  getPrenotazioniByCorso,
  getPrenotazioni,
  getPrenotazione,
  deletePrenotazione,
  modificaPrenotazione
};
