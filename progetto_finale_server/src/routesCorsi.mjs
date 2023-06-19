import fs from 'node:fs/promises'

const DB_PATH_CORSI = 'db/corsi.json'

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
        const index = content.findIndex(c => c.id == req.params.id)
        if(content[index]){
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
        const index = req.params.id - 1
        if (!content[index]) {
            res.send({
                data: {},
                error: true,
                message: `corso con id ${req.params.id} non trovato`
            }).status(404).end()
            return
        } else {
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
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_CORSI))
        const corsoId = req.params.id
        const index = content.findIndex(c => c.id == corsoId)

        if (index === -1) {
            res.send({
                data: {},
                error: true,
                message: `Corso con ID ${corsoId} non trovato`
            }).status(404)
            return
        }

        const oldCorso = content[index]
        const newCorso = { ...oldCorso, ...req.body }
        content[index] = newCorso

        await fs.writeFile(DB_PATH_CORSI, JSON.stringify(content, null, ' '))

        res.send({ message: 'Corso modificato correttamente' }).status(200)
    } catch (error) {
        console.log(error)
        res.send({ message: 'Modifica del corso non avvenuta. Errore durante la scrittura del file.' }).status(500)
    }
}

export {
    newCorso,
    getCorsi,
    getCorso,
    deleteCorso,
    modificaCorso
}
