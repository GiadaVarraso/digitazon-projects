import axios from "axios";
//importo axios 
const NGROK_URL='https://717c-37-163-205-137.ngrok-free.app/'

const getPrivateData = async ()=>{
    try {
        let response= await axios.get(NGROK_URL+'private',{
            headers :{
                Authorization:'Bearer toktok'
            }
        })
        console.log(response.data)
    } catch (error) {
        console.log('errore')
    }
}
getPrivateData()