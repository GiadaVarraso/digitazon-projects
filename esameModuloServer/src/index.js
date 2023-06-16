import express from 'express'
import { 
    newAlbum,
    getAlbumId,
    getAlbums,
    deleteAlbum,
    modificaAlbum
 } from "./routesAlbum.mjs"
import { 
    newFoto,
    getAllFotos,
    getFoto,
    getFotos,
    addFoto,
    deleteFoto,
    deleteFotoFromAlbum,
    modificaFoto
} from "./routesFoto.mjs"
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'

app.use(bodyParser.json())
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
    res.send('Rotte disponibili: \n'+
                "ALBUM: \n"+
                "post "+ "/albums"+ 
                ' (passare payload es:"nome":"nomeAlbum") \n' + 
                "get "+ "/albums"+ "\n"+
                "get "+ "/albums/:id"+ "\n"+
                "delete "+ "/albums/:id"+ "\n"+
                "put "+ "/albums/:id/modifica"+ "\n"

                +"FOTO: \n"+
                "post "+ "/fotos"+ ' (passare payload es:"nome": "cat", "hashtags": ["#cat"]) \n'
                +"get "+ "/fotos/id"+ "\n"
                +"get "+ "/fotos"+ "\n"
                // +"get "+ "/albums/:id/fotos"+ "\n"
                +"put "+ "/albums/:id/fotos/:id"+ "\n"
                // +"delete "+ "/albums/:id/fotos/:id"+ "\n"
                // +"put "+ "/fotos/:id/modifica"
    )
})

app.post("/albums", newAlbum)  //creo un album  - DONE
app.get("/albums", getAlbums) //recupero tutti gli album presenti - DONE
app.get("/albums/:id", getAlbumId) //recupero un album specifico  - DONE
app.delete("/albums/:id", deleteAlbum) //cancello l'album specifico - DONE
app.put("/albums/:id/modifica", modificaAlbum) //modifico un album specifico - DONE

app.post("/fotos", newFoto)  //creo una foto -DONE
app.get("/fotos", getAllFotos)  //recupero tutte le foto -DONE
app.get("/fotos/:id", getFoto)  //recupero una specifica foto -DONE
app.put("/albums/:ida/fotos/:idf", addFoto) //aggiungo foto ad un album specifico (gli hastag della foto vengono aggiunti all array degli hastag dell'album) -To FIX
app.get("/albums/:id/fotos", getFotos) //recupero tutte le foto di un album specifico -TODO
app.delete("fotos/:id", deleteFoto) //cancella foto, SE la foto è in album fotografico cancello prima dall array nell album fotografico la foto -TODO
app.delete("/albums/:ida/fotos/:idf", deleteFotoFromAlbum) //cancella foto da album fotografico -TODO
app.put("/fotos/:id/modifica", modificaFoto) //modifico foto

app.listen(port, () => {
    console.log(`Il server è online: http://localhost:${port}/`)
})