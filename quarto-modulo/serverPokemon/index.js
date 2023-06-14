import express from 'express'
import {
    addPokemon,
    deletePokemon,
    getPokemon,
    getPokemonId,
    updatePokemon
} from "./routesPokemon.mjs"
import { pokemonByType } from "./routesTypePokemon.mjs"
const app = express()
import bodyParser from 'body-parser'
app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/pokemon", getPokemon)
app.get("/pokemon/:id", getPokemonId)
// app.put("/pokemon/:id", updatePokemonImg)
app.put("/pokemon/:id", updatePokemon)
app.delete("/pokemon/:id", deletePokemon)
app.post("/pokemon", addPokemon)
app.get("/pokemon/types/:type", pokemonByType)


app.listen(port, () => {
    console.log(`Il server è online: http://localhost:${port}/`)
})

