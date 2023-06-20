import axios from 'axios';

const baseURL = 'http://localhost:8000';

async function deletePrenotazione(idC, idP) {
    const url = `${baseURL}/corsi/${idC}/prenotazioni/${idP}`;

    try {
        const response = await axios.delete(url);
        console.log(response.data);
    } catch (error) {
        console.log(error);
        console.log('\nERRORE NELL\'ELIMINAZIONE DELLA PRENOTAZIONE\n');
    }
}


deletePrenotazione(1, 2);