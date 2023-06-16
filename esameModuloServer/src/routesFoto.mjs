import fotos from "../db/fotos.json" assert {type: "json"}
import albums from "../db/albums.json" assert {type: "json"}
const DB_PATH_ALBUMS = 'db/albums.json'
const DB_PATH_FOTOS = 'db/fotos.json'
import fs from 'node:fs/promises'
import axios from 'axios'

function dataCorrenteFormat() {
    const now = new Date()
    const giorno = now.getDate()
    const mese = now.getMonth() + 1
    const anno = now.getFullYear() % 100

    // Formatta la data in gg/MM/YY
    const nowFormat = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`
    return nowFormat
}

const getAllFotos = async (req, res) => {
    res.send(fotos).end()
}

const newFoto = async (req, res) => {
    let lastID = fotos.reduce((comulator, f) => Number.parseInt(f.id) > comulator ? Number.parseInt(f.id) : comulator, 0)
    lastID++

    fotos.push({
        ...{ "id": lastID },
        ...req.body,
        ...{
            "dataCreazione": `${dataCorrenteFormat()}`,
            "dataModifica": `${dataCorrenteFormat()}`
        }
    })

    await fs.writeFile(DB_PATH_FOTOS, JSON.stringify(fotos, null, '  '), (err) => {
        if (err) {
            console.log(err);
            res.status(500).end();
            return;
        }
        res.status(200).end();
    })
    res.status(200).end();
}

const getFoto = (req, res) => {
    for (let i = 0; i < fotos.length; i++) {
        if (fotos[i].id == req.params.id) {
            res.send(fotos[i])
            res.status(200).end()
            return
        }
    }
    res.send({
        message: "foto non trovata",
        error: true,
        data: {}
    })
}

const getFotos = () => {
    return 'getFotos'
}

const addFoto = (req, res) => {
    let newHash = new Set()
    let albumFotos = []

    axios.get(`http://localhost:3000/albums/${req.params.ida}`)
        .then(album => {
            album.hashtags.foreach((e) => {
                newHash.add(e)
            })
            albumFotos = album.fotografie
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "album non trovato",
                error: true,
                data: {}
            })
        });


    let foto = axios.get(`http://localhost:3000/fotos/${req.params.idf}`)
        .then(foto => {
            let fotoHashtags = foto.hashtags
                fotoHashtags.foreach((e) => {
                newHash.add(e)
            })
            albumFotos.push(foto.id)
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "foto non trovata",
                error: true,
                data: {}
            })
        });

    axios.put('/albums/:ida/modifica', {
        "fotografie": albumFotos,
        "hashtags": newHash
    })
        .then(response => {
            res.send({ 'message': `foto con id ${req.params.idf} aggiunta all album con id ${req.params.ida}` })
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({
                error: 'Errore nel recupero degli album.'
            });
        });

}

const deleteFoto = () => {
    return 'deleteFoto'
}

const deleteFotoFromAlbum = () => {
    return 'deleteFotoFromAlbum'
}


const modificaFoto = () => {
    return 'modificaFoto'
}

export {
    newFoto,
    getAllFotos,
    getFoto,
    getFotos,
    addFoto,
    deleteFoto,
    deleteFotoFromAlbum,
    modificaFoto
}

