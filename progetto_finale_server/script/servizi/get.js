import axios from 'axios'

async function getServizi(){
    const url ='http://localhost:8000/servizi'
    try {
        const response= await axios.get(url)
        console.log(response.data)
    } catch (error) {
        console.log('SERVIZIO NON TROVATA')
        console.log(error)
    }
}
getServizi()