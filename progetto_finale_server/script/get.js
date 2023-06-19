import axios from 'axios'

async function call(id){
    const url=id?`http://localhost:8000/corsi/${id}`:'http://localhost:8000/corsi'
    const response= await axios.get(url)
    console.log(response.data)

}

call(2) // get id specifico
call()  // get all