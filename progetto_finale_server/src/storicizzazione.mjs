import fs from 'node:fs/promises';

const DB_PATH_CORSI = 'db/corsi.json'
const DB_PATH_PRENOTAZIONI = 'db/prenotazioni.json'

export default async function storicizzaPrenotazioni() {
    try {
        const now = new Date();
        const giorno = now.getDate()
        const mese = now.getMonth() + 1
        const anno = now.getFullYear() % 100
        const formatDate = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`
        console.log(`\nStoricizzazione automatica delle prenotazioni iniziata alle ${now.getHours()}.${now.getMinutes()}\n`)
        const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        const giornoConvertito = giorniSettimana[now.getDay()];

        const corsi = JSON.parse(await fs.readFile(DB_PATH_CORSI));
        const prenotazioni = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
        const toCheck = prenotazioni.filter((p) => !p.hasOwnProperty('old'))
        toCheck.forEach((p, i) => {
            const corso = corsi.filter((c) => c.id == p.idCorso)
            if (corso[0].giorno == giornoConvertito) {
                const prenotazione = { ...p, old: formatDate }
                prenotazioni[i] = prenotazione;
            }
        });
        await fs.writeFile(DB_PATH_PRENOTAZIONI, JSON.stringify(prenotazioni, null, " "));
        console.log(`\nStoricizzazione automatica delle prenotazioni terminata alle ${now.getHours()}.${now.getMinutes()}\n`)
    } catch (error) {
        console.log(error);
        console.log('errore durante la storicizzazione delle prenotazioni');
    }
};
