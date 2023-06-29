import axios from 'axios';

async function postIstruttore() {
  const url = 'http://localhost:8000/istruttori';
  const newIstruttore = {
    nome: 'stagista',
    info: 'info'
  };

  try {
    const response = await axios.post(url, newIstruttore);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    console.error('\nISTRUTTORE NON AGGIUNTO\n');
  }
}

postIstruttore()