import fs from 'node:fs/promises';

const DB_PATH_SERVIZI = 'db/servizi.json'

const newServizio = async (req, res) => {

}
const getServizi = async (req, res) => {
    try {
        const servizi = JSON.parse(await fs.readFile(DB_PATH_SERVIZI));
        res.send(servizi);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Errore nel server'
        });
    }
}
const deleteServizio = async (req, res) => {

}
const modificaServizio = async (req, res) => {

}


export {
    newServizio,
    getServizi,
    deleteServizio,
    modificaServizio
}