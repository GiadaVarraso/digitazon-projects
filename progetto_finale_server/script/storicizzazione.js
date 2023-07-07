// storicizza prenotazioni 
/* ogni notte alle 23.59 deve controllare il file delle prenotazioni 
  prendere gli oggetti dell array che non hanno proprietà 'old'
  controllare che il corso al quale si riferisce abbia proprietà 'giorno' == a oggi getDay()
  vuol dire che il corso si è tenuto oggi stesso e la prenotazione va storicizzata
  quindi si aggiunge una proprietà 'old' all oggetto prenotazione
*/

import fs from 'node:fs/promises';

const DB_PATH_CORSI = '../db/corsi.json'
const DB_PATH_PRENOTAZIONI = '../db/prenotazioni.json'

async function storicizzaPrenotazioni() {
    try {
        const now = new Date();
        console.log(`\nStoricizzazione iniziata alle ${now.getHours()}.${now.getMinutes()}\n`)
        const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        const giornoConvertito = giorniSettimana[now.getDay()];
        
        const corsi = JSON.parse(await fs.readFile(DB_PATH_CORSI));
        const prenotazioni = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
        const toCheck = prenotazioni.filter((p) => !p.hasOwnProperty('old'))
        toCheck.forEach((p,i) => {
            const corso = corsi.filter((c) => c.id == p.idCorso)
            if (corso[0].giorno == giornoConvertito) {
                const prenotazione = { ...p, old:true }
                prenotazioni[i]=prenotazione;
            }
        });
        await fs.writeFile(DB_PATH_PRENOTAZIONI, JSON.stringify(prenotazioni, null, " "));
        console.log(`Storicizzazione terminata alle ${now.getHours()}.${now.getMinutes()}`)
    } catch (error) {
        console.log(error);
        console.log('errore durante la storicizzazione delle prenotazioni');
    }
};

storicizzaPrenotazioni()