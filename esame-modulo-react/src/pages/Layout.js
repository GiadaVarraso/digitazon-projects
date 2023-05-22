import { Outlet, Link } from "react-router-dom";
import Search from '../components/Search'
import Prodotto from '../components/Prodotto'

import {useState} from 'react'

const Layout = () => {
    let [product,setProduct]=useState([])
    return (
    <>
        <nav>
            <header className='headerSerchSection flex white'>
            <div><img className='hover logo' src='https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png'></img></div>
            <div className='hover flex directColumn '>
                <span>ciao</span>
                <span>Scegli il tuo indirizzo</span>
            </div>
            <Search searchUrl='https://dummyjson.com/products/search?q=' setProduct={setProduct}></Search>
            <div className='hover flex directColumn '>
                <span>ciao, accedi</span>
                <span>Account e liste</span>
            </div>
            <div className='hover flex directColumn'>
                <span>Resi</span>
                <span>e Ordini</span>
            </div>
            <div className='hover flex'>
                <div><img src='https://www.brugnara.net/wp-content/uploads/2017/03/icona-prodotti-white-shadow.png' width='30px'></img></div>
                <Link to="/carrello"><span>Carrello</span></Link>
            </div>
            </header>
            <div className='headerLinkSection white'>
            <ul>
                <li>Tutte</li>
                <li>Bestseller</li>
                <li>Amazon Basica</li>
                <li>Offerte</li>
                <li>Musica</li>
                <li>Servizio Clienti</li>
                <li>Novità</li>
                <li>Prime</li>
                <li>Ebook</li>
                <li>Videogiochi</li>
                <li>Libri</li>
                <li>Informatica</li>
                <li>Casa e cucina</li>
            </ul>
            </div>
        </nav>
    
       <div className="all">
            <Outlet />
            <Prodotto product={product}></Prodotto>
    
       </div>
    </>
  )
};

export default Layout;