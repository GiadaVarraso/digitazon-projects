/* 
nel caso in cui il server era offline nell'orario previsto per la storicizzazione automatica giornaliera
usare questo script per avviare la storicizzazione delle prenotazioni manuale.
Usare lo script con parametro data (il giorno in cui non è stata effettuata) es.: 2023-07-02
*/

import fs from 'node:fs/promises';

const DB_PATH_CORSI = '../db/corsi.json'
const DB_PATH_PRENOTAZIONI = '../db/prenotazioni.json'

async function storicizzaPrenotazioni(data) {
    try {
        const now = new Date(data);
        console.log(`\nStoricizzazione iniziata\n`)
        const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        const giornoSettimana = giorniSettimana[now.getDay()];

        const corsi = JSON.parse(await fs.readFile(DB_PATH_CORSI));
        const prenotazioni = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
        let toCheck;
        toCheck = prenotazioni.filter((p) => !p.hasOwnProperty('old') && p.dataCreazione.data < data)

        toCheck.forEach((p, i) => {
            const corso = corsi.filter((c) => c.id == p.idCorso)

            if (corso[0].giorno == giornoSettimana) {
                console.log('effettuo storicizzazione del giorno ' + giornoSettimana)
                const prenotazione = { ...p, old: data }
                prenotazioni[i] = prenotazione;
            }
        });
        await fs.writeFile(DB_PATH_PRENOTAZIONI, JSON.stringify(prenotazioni, null, " "));
        console.log(`Storicizzazione terminata`)
    } catch (error) {
        console.log(error);
        console.log('errore durante la storicizzazione delle prenotazioni');
    }
};

storicizzaPrenotazioni(process.argv[2])  // es.: 2023-07-05