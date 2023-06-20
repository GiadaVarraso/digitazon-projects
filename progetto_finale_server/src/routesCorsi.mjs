import fs from 'node:fs/promises'

const DB_PATH_CORSI = 'db/corsi.json'
const DB_PATH_PRENOTAZIONI = 'db/prenotazioni.json'

async function nextId() {
    const content = JSON.parse(await fs.readFile(DB_PATH_CORSI))
    const currentId = content.reduce((cumulator, c) => cumulator > parseInt(c.id) ? cumulator : parseInt(c.id), 1)
    const nextId = currentId + 1
    return nextId
}

const newCorso = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_CORSI))
        const id = await nextId();
        content.push({ id: id, ...req.body })
        await fs.writeFile(DB_PATH_CORSI, JSON.stringify(content, null, " "))
        res
            .send({ message: 'La richiesta è stata elaborata con successo e ha portato alla creazione di una nuova risorsa' })
            .status(201)

    } catch (error) {
        console.log(error)
        res.send({ message: 'Corso non aggiunto. Errore nel server' }).status(500)
    }
}

const getCorsi = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_CORSI))
        res.send({ data: content }).end()
        return
    } catch (error) {
        console.log(error)
    }
    res.send({
        data: {},
        error: true,
        message: 'La risorsa richiesta non è stata trovata'
    }).status(404).end()
}

const getCorso = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_CORSI))
        const index = content.findIndex(c => c.id == parseInt(req.params.id))
        if (content[index]) {
            res.send({ data: content[index] }).end()
            return
        }

        res.send({
            data: {},
            error: true,
            message: `corso con id ${req.params.id} non trovato`
        }).status(404).end()

    } catch (error) {
        console.log(error)
        res.send({ message: 'Errore nel server' }).status(500)
    }
}

const deleteCorso = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_CORSI))
        const index = content.findIndex(c => c.idCorso == req.params.id)
        const idCorso = parseInt(req.params.id);

        if (index === -1) {
            res.send({
                data: {},
                error: true,
                message: `corso con id ${idCorso} non trovato`
            }).status(404).end()
            return
        } else {
            //nel caso in cui il corso ha delle prenotazioni a suo carico, cancellare le prenotazioni prima 
            try {
                const content = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI));
                const prenotazioni = content.filter(p => p.idCorso == idCorso);
                for (let i = 0; i < prenotazioni.length; i++) {
                    const p = prenotazioni[i];
                    const url = `http://localhost:8000/corsi/${idCorso}/prenotazioni/${p.idPrenotazione}`;

                    try {
                        const response = await axios.delete(url);
                        console.log(response.data);
                    } catch (error) {
                        console.error(error);
                        res
                            .send({
                                message:
                                    'CORSO NON CANCELLATO. Non è stato possibile cancellare la prenotazione ' +
                                    p.idPrenotazione + 'relativa al corso ' + idCorso + '.'
                            })
                            .status(409)
                        return
                    }
                }
            } catch (error) {

            }
            content.splice(index, 1)
            await fs.writeFile(DB_PATH_CORSI, JSON.stringify(content, null, ' '))
            res.send({ message: 'risorsa cancellata' }).status(204)
        }
    } catch (error) {
        console.log(error);
        res.send({ message: 'cancellazione non avvenuta. Errore nel server' }).status(500)
    }
}

const modificaCorso = async (req, res) => {
    const corsoId = parseInt(req.params.id)

    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_CORSI))
        const index = content.findIndex(c => c.id == corsoId)

        if (index === -1) {
            res.send({
                data: {},
                error: true,
                message: `Corso con ID ${corsoId} non trovato`
            }).status(404)
            return
        }

        // se un corso ha delle prenotazioni connesse non deve essere possibile modificarlo prima di aver cancellato le prenotazioni relative
        try {
            const prenotazioni = JSON.parse(await fs.readFile(DB_PATH_PRENOTAZIONI))
            const hasPrenotazioni = prenotazioni.some(p => p.idCorso == corsoId);
            if (hasPrenotazioni) {
                res.send({
                    data: {},
                    error: true,
                    message: `Conflitto di risorse. Il corso con ID ${corsoId} ha delle prenotazioni collegate e al momento non è possibile modificarlo. Rimuovere le prenotazioni e riprovare.`
                }).status(409)
                return
            }
        } catch (error) {
            console.log(error)
            res.send({ message: 'Modifica del corso non avvenuta. Errore durante la lettura del file prenotazioni' }).status(500)
            return
        }

        const oldCorso = content[index]
        const newCorso = { ...oldCorso, ...req.body }
        content[index] = newCorso

        await fs.writeFile(DB_PATH_CORSI, JSON.stringify(content, null, ' '))

        res.send({ message: 'Corso modificato correttamente' }).status(200)
    } catch (error) {
        console.log(error)
        res.send({ message: 'Modifica del corso non avvenuta' }).status(500)
    }
}

export {
    newCorso,
    getCorsi,
    getCorso,
    deleteCorso,
    modificaCorso
}
