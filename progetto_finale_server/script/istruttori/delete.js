import axios from 'axios';

async function deleteIstruttore(id) {
  const url = `http://localhost:8000/istruttori/${id}`;

  try {
    const response = await axios.delete(url);
    console.log(response.data);
  } catch (error) {
    console.log('\nNON CANCELLATO\n');
    console.error(error);
  }
}

deleteIstruttore(process.argv[2])