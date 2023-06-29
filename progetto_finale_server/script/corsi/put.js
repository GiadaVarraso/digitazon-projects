import axios from 'axios';

async function putCorso(id) {
  const url = `http://localhost:8000/corsi/${id}`;
  const updatedCorso = {
    // nome: 'Corso aggiornato',
    // istruttore: 'Istruttore aggiornato',
    // descrizione: 'Descrizione aggiornata',
    livello: 'Avanzato',
    // giorno: 'Venerdì', 
    // orario: '16:00' ,
    // durata: '1 ora e 30 minuti',
    // postiDisponibili: 15
  };

  try {
    const response = await axios.put(url, updatedCorso);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

putCorso(process.argv[2])
