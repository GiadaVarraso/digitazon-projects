import axios from 'axios';

async function putCorso(id) {
  const url = `http://localhost:8000/istruttori/${id}`;
  const updatedCorso = {
    nome: 'Di Feo Federica (Vice Presidente ASD)',
  };

  try {
    const response = await axios.put(url, updatedCorso);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

putCorso(process.argv[2])
