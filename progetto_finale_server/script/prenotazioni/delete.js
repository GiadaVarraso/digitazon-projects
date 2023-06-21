import axios from 'axios';

const baseURL = 'http://localhost:8000';

async function deletePrenotazione(idC, idP) {
    const url = `${baseURL}/corsi/${idC}/prenotazioni/${idP}`;

    try {
        await axios.delete(url);
        console.log('cancellata');
    } catch (error) {
        console.log(error);
        console.log('\nERRORE NELL\'ELIMINAZIONE DELLA PRENOTAZIONE\n');
    }
}


deletePrenotazione(process.argv[2], process.argv[3]);