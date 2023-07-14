import axios from 'axios'

async function call(id) {
    try {
        const url = id ? `http://localhost:8000/istruttori/${id}` : 'http://localhost:8000/istruttori'
        const response = await axios.get(url)
        console.log(response.data)
    } catch (error) {
        console.log('\nRISORSA NON TROVATA\n')
        console.log(error)
    }
}

call(process.argv[2]) // get id specifico
// call()  // get all