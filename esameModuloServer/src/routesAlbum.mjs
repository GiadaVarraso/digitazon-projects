import albums from "../db/albums.json" assert {type: "json"}
const DB_PATH_ALBUMS='db/albums.json'
import fs from 'node:fs/promises'

const getAlbums = (req, res) => {
    res.send(albums)
}

const getAlbumId = (req, res) => {
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id == req.params.id) {
            res.send(albums[i])
            res.status(200).end()
            return
        }
    }
    res.send({
        message: "album non trovato",
        error: true,
        data: {}
    })
}

const newAlbum =async (req, res) => {
    let lastID = albums.reduce((comulator, a) => Number.parseInt(a.id) > comulator ? Number.parseInt(a.id) : comulator, 0)
    lastID++
    const dataCreazione=new Date()
    const giorno = dataCreazione.getDate();
    const mese = dataCreazione.getMonth() + 1;
    const anno = dataCreazione.getFullYear() % 100; 

    // Formatta la data in gg/MM/YY
    const dataCreazioneFormat = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`;

    albums.push({
        ...{ "id": lastID },
        ...req.body,
        ...{
            "fotografie": [],
            "hashtags": [] ,
            "dataCreazione":`${dataCreazioneFormat}`,
            "dataModifica": `${dataCreazioneFormat}`  
        }
    })

    await fs.writeFile(DB_PATH_ALBUMS, JSON.stringify(albums, null, '  '), (err) => {
        if (err) {
          console.log(err);
          res.status(500).end(); 
          return;
        }
        res.status(200).end();
    })
    res.status(200).end();
}

const deleteAlbum = async(req, res) => {
    let index = -1

    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id == req.params.id) {
            index = i
        }
    }

    if (index == -1) {
        res.send({
            message: "album non trovato",
            error: true,
        }).end()
    } else {
        albums.splice(index, 1)
        res.send({
            message: `album con id=${req.params.id} cancellato`,
        }).status(200).end()
    }

    await fs.writeFile(DB_PATH_ALBUMS, JSON.stringify(albums, null, '  '), (err) => {
        if (err) {
          console.log(err);
          res.status(500).end(); 
          return;
        }
        res.status(200).end();
    })
    res.status(200).end();
}

const modificaAlbum = async (req, res) => {
    const dataModifica=new Date()
    const giorno = dataModifica.getDate();
    const mese = dataModifica.getMonth() + 1;
    const anno = dataModifica.getFullYear() % 100; 

    // Formatta la data in gg/MM/YY
    const dataModificaFormat = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`;

    const idAlbum = parseInt(req.params.id)

    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id == idAlbum) {
            albums[i] = { ...albums[i], ...req.body, ...{"dataModifica":`${dataModificaFormat}`} }
            await fs.writeFile(DB_PATH_ALBUMS, JSON.stringify(albums, null, '  '), (err) => {
                if (err) {
                  console.log(err);
                  res.status(500).end(); 
                  return;
                }
            })
            res.status(200).end();
            return
        }else {
            res.send({
                message: `album con id=${req.params.id} non trovato`,
            }).end()   
        }
    }
    res.status(404).end()
}

export {
    newAlbum,
    getAlbumId,
    getAlbums,
    deleteAlbum,
    modificaAlbum
}