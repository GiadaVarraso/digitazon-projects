import axios from 'axios';

async function postPrenotazione() {
  const url = 'http://localhost:8000/corsi/1/prenotazioni';
  const prenotazioneData = {
    nomeCliente: 'Giuseppina Ferreri',
    dataCreazione: {
      data: '2023-06-19',
      orario: '14:30'
    },
    dataPrenotazione: {
      data: '2023-06-20',
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

postPrenotazione();
