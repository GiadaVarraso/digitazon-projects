import axios from 'axios';

async function postPrenotazione(idC) {
  const url = `http://localhost:8000/corsi/${idC}/prenotazioni`;
  const prenotazioneData = {
    nomeCliente: 'Mario Rossi',
    Prenotazione: {
      orario: '18:30',
      giornoSettimana: 'Martedì'
    }
  };

  try {
    const response = await axios.post(url, prenotazioneData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    console.error('\nPRENOTAZIONE NON AGGIUNTA\n');
  }
}

postPrenotazione(process.argv[2]);
