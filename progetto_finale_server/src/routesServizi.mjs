import fs from 'node:fs/promises';

const DB_PATH_SERVIZI = 'db/servizi.json'

const newServizio = async (req, res) => {
    try {
        const servizi = JSON.parse(await fs.readFile(DB_PATH_SERVIZI));
        servizi.push(req.body);

        await fs.writeFile(DB_PATH_SERVIZI, JSON.stringify(servizi));

        res.status(201).send({
            message: 'Nuovo servizio creato con successo'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Errore nel server'
        });
    }
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
    try {
        const servizi = JSON.parse(await fs.readFile(DB_PATH_SERVIZI));
        const servizioIndex = servizi.findIndex(servizio => servizio.id === req.params.id);

        if (servizioIndex == -1) {
            res.status(404).send({
                message: 'Servizio non trovato'
            });
            return;
        }

        servizi.splice(servizioIndex, 1);

        await fs.writeFile(DB_PATH_SERVIZI, JSON.stringify(servizi));

        res.send({
            message: 'Servizio eliminato con successo'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Errore nel server'
        });
    }
}
const modificaServizio = async (req, res) => {
    try {
        const servizi = JSON.parse(await fs.readFile(DB_PATH_SERVIZI));

        const servizioIndex = servizi.findIndex(servizio => servizio.id == req.params.id);

        if (servizioIndex === -1) {
            res.status(404).send({
                message: 'Servizio non trovato'
            });
            return;
        }

        servizi[servizioIndex] = { ...servizi[servizioIndex], ...req.body };

        await fs.writeFile(DB_PATH_SERVIZI, JSON.stringify(servizi));

        res.send({
            message: 'Servizio modificato con successo',
            servizio: servizi[servizioIndex]
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Errore nel server'
        });
    }
}

export {
    newServizio,
    getServizi,
    deleteServizio,
    modificaServizio
}