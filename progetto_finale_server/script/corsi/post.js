import axios from 'axios';

async function postCorso() {
  const url = 'http://localhost:8000/corsi';
  const newCorso = {
    nome: 'Walking',
    istruttore: 'Barbara Bertolosso',
    descrizione: 'Walking Circuit',
    livello: 'Intermedio',
    giorno: 'Lunedì',
    orario: '10:00' ,
    durata: '1 ora',
    postiDisponibili: 20
  };

  try {
    const response = await axios.post(url, newCorso);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    console.error('\nCORSO NON AGGIUNTO\n');
  }
}

postCorso()
