import axios from 'axios';

async function deleteCorso(id) {
  const url = `http://localhost:8000/corsi/${id}`;

  try {
    const response = await axios.delete(url);
    console.log(response.data);
  } catch (error) {
    console.log('\nNON CANCELLATO\n');
    console.error(error);
  }
}

deleteCorso(process.argv[2])
