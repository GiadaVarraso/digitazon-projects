import axios from 'axios';

const baseURL = 'http://localhost:8000';

async function modificaPrenotazione(idC, idP, prenotazioneData) {
    const url = `${baseURL}/corsi/${idC}/prenotazioni/${idP}`;

    try {
        const response = await axios.put(url, prenotazioneData);
        console.log(response.data);
    } catch (error) {
        console.log(error);
        console.log('\nERRORE NELLA MODIFICA DELLA PRENOTAZIONE\n');
    }
}


modificaPrenotazione(process.argv[2],process.argv[3], {
    nomeCliente: 'Pablo'
});