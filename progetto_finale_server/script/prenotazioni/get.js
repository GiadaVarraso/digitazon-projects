import axios from 'axios';

const baseURL = 'http://localhost:8000';

async function getPrenotazioni() {
  const url = `${baseURL}/prenotazioni`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log('\nERRORE NEL RECUPERARE LE PRENOTAZIONI\n');
  }
}

async function getPrenotazioniByCorso(id) {
  const url = `${baseURL}/corsi/${id}/prenotazioni`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log('\nERRORE NEL RECUPERARE LE PRENOTAZIONI DEL CORSO\n');
  }
}

async function getPrenotazione(idC, idP) {
  const url = `${baseURL}/corsi/${idC}/prenotazioni/${idP}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log('\nERRORE NEL RECUPERARE LA PRENOTAZIONE\n');
  }
}

// getPrenotazioni();
// getPrenotazioniByCorso(1);
getPrenotazione(1, 2);
