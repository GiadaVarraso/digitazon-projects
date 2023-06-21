import axios from 'axios'

async function call(id){
    try {
        const url=id?`http://localhost:8000/corsi/${id}`:'http://localhost:8000/corsi'
        const response= await axios.get(url)
        console.log(response.data)
    } catch (error) {
        console.log('\nRISORSA NON TROVATA\n')
        console.log(error)
    }
}

// call(process.argv[2]) // get id specifico
// call(process.argv[2]) // get id specifico non presente
call()  // get all

