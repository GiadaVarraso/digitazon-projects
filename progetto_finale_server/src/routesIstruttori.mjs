
import fs from 'node:fs/promises'
import axios from 'axios'

const DB_PATH_CORSI = 'db/corsi.json'
const DB_PATH_ISTRUTTORI = 'db/istruttori.json'

async function nextId() {
    const content = JSON.parse(await fs.readFile(DB_PATH_ISTRUTTORI))
    const currentId = content.reduce((cumulator, i) =>
        cumulator > parseInt(i.id) ? cumulator : parseInt(i.id), 1)
    const nextId = currentId + 1
    return nextId
}

const postIstruttore = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_ISTRUTTORI))
        const id = await nextId();
        content.push({ id: id, ...req.body })
        await fs.writeFile(DB_PATH_ISTRUTTORI, JSON.stringify(content, null, " "))
        res
            .send({ message: 'La richiesta è stata elaborata con successo e ha portato alla creazione di una nuova risorsa' })
            .status(201)

    } catch (error) {
        console.log(error)
        res.send({ message: 'Istruttore non aggiunto. Errore nel server' }).status(500)
    }
}

const getIstruttori = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_ISTRUTTORI))
        res.send(content).end()
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

const getIstruttoreByid = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_ISTRUTTORI))
        const index = content.findIndex(i => i.id == parseInt(req.params.id))
        if (content[index]) {
            res.send(content[index]).end()
            return
        }

        res.send({
            data: {},
            error: true,
            message: `istruttore con id ${req.params.id} non trovato`
        }).status(404).end()

    } catch (error) {
        console.log(error)
        res.send({ message: 'Errore nel server' }).status(500)
    }
}

const deleteIstruttore = async (req, res) => {
    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_ISTRUTTORI))
        const idIstruttore = parseInt(req.params.id);
        const index = content.findIndex(i => i.id == idIstruttore)

        if (index === -1) {
            res.send({
                data: {},
                error: true,
                message: `Istruttore con id ${idIstruttore} non trovato`
            }).status(404).end()
            return
        } else {
            // nel caso in cui l'istruttore ha dei corsi a suo carico,
            // è necessario cancellare o modificare i corsi prima
            try {
                const corsi = JSON.parse(await fs.readFile(DB_PATH_CORSI))
                const hasCorso = corsi.some(c => c.istruttore == content[index].nome);
                if (hasCorso) {
                    res.send({
                        data: {},
                        error: true,
                        message: `Conflitto di risorse. L'istruttore con ID ${idIstruttore} ha dei corsi collegati e al momento non è possibile eliminarlo. Rimuovere o modificare i corsi relativi e riprovare.`
                    }).status(409)
                    return
                }
            } catch (error) {
                console.log(error)
                res.send({ message: 'Eliminazione dell istruttore non avvenuta. Errore durante la lettura del file dei corsi' }).status(500)
                return
            }

            content.splice(index, 1)
            await fs.writeFile(DB_PATH_ISTRUTTORI, JSON.stringify(content, null, ' '))
            res.send({ message: 'risorsa cancellata' }).status(204)
        }
    } catch (error) {
        console.log(error);
        res.send({ message: 'cancellazione non avvenuta. Errore nel server' }).status(500)
    }
}

const modificaIstruttore = async (req, res) => {
    const idIstruttore = parseInt(req.params.id)

    try {
        const content = JSON.parse(await fs.readFile(DB_PATH_ISTRUTTORI))
        const index = content.findIndex(i => i.id == idIstruttore)

        if (index === -1) {
            res.send({
                data: {},
                error: true,
                message: `Corso con ID ${idIstruttore} non trovato`
            }).status(404)
            return
        }

        const oldIstruttore = content[index]
        const newIstruttore = { ...oldIstruttore, ...req.body }
        content[index] = newIstruttore

        await fs.writeFile(DB_PATH_ISTRUTTORI, JSON.stringify(content, null, ' '))

        res.send({ message: 'Istruttore modificato correttamente' }).status(200)
    } catch (error) {
        console.log(error)
        res.send({ message: 'Modifica istruttore non avvenuta' }).status(500)
    }
}

export {
    postIstruttore
    , getIstruttoreByid
    , getIstruttori
    , deleteIstruttore
    , modificaIstruttore
}