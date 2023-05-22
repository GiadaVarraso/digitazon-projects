
import './App.css';

import Layout from './pages/Layout'
import Carrello from './pages/Carrello'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Creare un esempio di pagina principale di Amazon, dovrà esserci almeno:
// ● la lista di prodotti
// ● la ricerca sui prodotti
// ● il carrello
// Scopo dell’esercitazione e’ dimostrare di aver capito come distribuire i vari componenti sulla
// pagina, come farli interagire tra loro, come far interagire l’utente con la pagina tramite React,
// e come creare una UX di buona qualità.
// Non viene fornito alcuno screenshot proprio per questa ultima richiesta.
// A questo indirizzo trovate tutti gli endpoint di cui avete bisogno https://dummyjson.com/,
// capire con successo quali endpoint usare fa parte della valutazione.

function App() {
  return (
    // <div className="App">
    //   <nav>
    //     <header className='headerSerchSection flex white'>
    //       <div><img className='hover logo' src='https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png'></img></div>
    //       <div className='hover flex directColumn '>
    //         <span>ciao</span>
    //         <span>Scegli il tuo indirizzo</span>
    //       </div>
    //       <Search searchUrl='https://dummyjson.com/products/search?q=' setProduct={setProduct}></Search>
    //       <div className='hover flex directColumn '>
    //         <span>ciao, accedi</span>
    //         <span>Account e liste</span>
    //       </div>
    //       <div className='hover flex directColumn'>
    //         <span>Resi</span>
    //         <span>e Ordini</span>
    //       </div>
    //       <div className='hover flex'>
    //         <div><img src='https://www.brugnara.net/wp-content/uploads/2017/03/icona-prodotti-white-shadow.png' width='30px'></img></div>
    //         <span>Carrello</span>
    //       </div>
    //     </header>
    //     <div className='headerLinkSection white'>
    //       <ul>
    //         <li>Tutte</li>
    //         <li>Bestseller</li>
    //         <li>Amazon Basica</li>
    //         <li>Offerte</li>
    //         <li>Musica</li>
    //         <li>Servizio Clienti</li>
    //         <li>Novità</li>
    //         <li>Prime</li>
    //         <li>Ebook</li>
    //         <li>Videogiochi</li>
    //         <li>Libri</li>
    //         <li>Informatica</li>
    //         <li>Casa e cucina</li>
    //       </ul>
    //     </div>
    //   </nav>


    //   <div className='body'>
    //     <Prodotto product={product}></Prodotto>

    //     <div className='bodySection flex'>
    //       <button className='hover'><img src='https://cdn-icons-png.flaticon.com/512/271/271220.png' width='90px'></img></button>
    //       <div className='flex directColumn'>
    //         <div>
    //           <h1>Goditi le tue serie TV</h1>
    //           <h1>e i tuoi film preferiti</h1>
    //         </div>
    //         <div>
    //           <h2>firetv con Alexa</h2>
    //         </div>
    //       </div>
    //       <div>
    //         <img src='https://www.saggiamente.com/wp-content/uploads/2018/06/firetvcube.jpg' width='300px'></img>
    //       </div>
    //       <button className='hover'><img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' width='90px'></img></button>
    //     </div>

    //     <div className='flex cards'>
    //       <div className='card'>
    //         <h3>Aiuta le persone in Emilia-Romagna</h3>
    //         <img src='https://images-eu.ssl-images-amazon.com/images/G/29/donate/disaster/IT23_gecmisolsunturkiye_Desktop_Cards_379x304._SY304_CB613854889_.jpg'></img>
    //       </div>
    //       <div className='card'>
    //         <h3>Offerte lampo</h3>
    //         <img src='https://images-eu.ssl-images-amazon.com/images/G/29/donate/disaster/IT23_gecmisolsunturkiye_Desktop_Cards_379x304._SY304_CB613854889_.jpg'></img>
    //       </div>
    //       <div className='card'>
    //         <h3>Suono nitido e bilanciato</h3>
    //         <img src='https://images-eu.ssl-images-amazon.com/images/G/29/donate/disaster/IT23_gecmisolsunturkiye_Desktop_Cards_379x304._SY304_CB613854889_.jpg'></img>
    //       </div>
    //       <div className='card accedi'>
    //         <h3>Accedi per un esperienza migliore</h3>
    //         <button className='buttonAccedi'>Accedi in modo sicuro</button>
    //       </div>
    //     </div>

    //     <ListaProdotti url='https://dummyjson.com/products'></ListaProdotti>

    //   </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="carrello" element={<Carrello />} />
          </Route>
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
