/*
scrivo uno script che 
deve fare una chiamata all path https://37b2-2-44-90-143.ngrok-free.app/root
al suo interno ho degli oggetti che hanno proprietà 
key: "a0b1c2d3e4f5",
eventualmente anche la proprietà treasure
children: []

--------------------------------------------
funzioni ricorsive?

function findTreasure(result) {
  // Caso base: se trova la proprietà treasure , 
  if (se trova la proprietà treasure) {
    return obj.key ;   //che successivamente consolliamo durante il run dello script
  } 
  // Caso ricorsivo: se children è == a [ .lenght > 0 ]
  else if (se children è == a [ obj.children.lenght > 0 ]){
    loop obj.children 
    let key= obj.children[i].key
    let result = axios get
    return findTreasure( result ) 

    //caso che termina la ricorsione? se children è == a []
    return false;
  }
}

findtreasure() 

------------  setTimeout() ? ---------------
async function wait(ms){
    return new Promise( function (resolve) {
        console.log('wait')
        setTimeout( () {
            console.log('finish waiting')
            resolve()
        }, ms)
    })
}

for loop...
axios.get .......
wait(4000)

---------------------------------------------

lanciare lo script con il terminale 
node run keysEncode.js
*/



//la prima funzione per cercare tutti i possibili key che abbiamo 
//e fillare un array con tutte queste chiavi
//fare n chiamate , tante quanto array.lenght , che fanno get al path 'ngrok/${array[i]}' 
//con un wait di mezzo
//se il risultato della chiamata get ha come proprietà treasure terminare la funzione
//restituendo key
import axios from 'axios';

async function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function searchTreasure(endpoint) {
    const response = await axios.get(endpoint ,{
        headers:{
            name:'Giada Varri'
        }
    });
    const data = response.data;

    // caso in cui trova la proprietà treasure 
    if (data.hasOwnProperty('treasure')) {
        return data.key;  //restituisce key e termina la ricorsione
    }

    //caso in cui data.children è un array di oggetti
    if (Array.isArray(data.children)) {
        //cicla su data.children e ricava l oggetto child (che a sua volta ha prop key)
        for (let child of data.children) {
            //crea l endpoint con la chiave del child
            const childEndpoint = `https://37b2-2-44-90-143.ngrok-free.app/keys/${child.key}`;
            console.log('sto provando la chiave ' + child.key);
            await wait(500); //aspetta 0.5 sec
            //fa la ricorsione della funzione passandogli il path con la child.key
            const hasTreasure = await searchTreasure(childEndpoint);
            //se la funzione non ritorna false (quindi o si ricorre 
            // o termina alla riga 80 valorizzando hasTreasure con data.key)
            if (hasTreasure) {
                return hasTreasure; //la funzione ritorna hasTreasure.
            }
        }
    }

    return false;
}

const initialEndpoint = 'https://37b2-2-44-90-143.ngrok-free.app/keys/a0b1c2d3e4f5';

searchTreasure(initialEndpoint)
    .then(hasTreasure => {
        if (hasTreasure) {
            console.log('Chiave del tesoro: ' + hasTreasure);
        } else {
            console.log('La chiave del tesoro non è stata trovata.');
        }
    })
    .catch(error => {
        console.error(error);
    });
