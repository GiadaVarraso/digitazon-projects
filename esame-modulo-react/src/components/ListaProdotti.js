import { useEffect, useState } from 'react'

function fetchProducts(url, setRes) {
    async function fetchContents() {
        let res = await fetch(url);
        let json = await res.json();
        let arrayProducts = Object.values(json)
        setRes(arrayProducts[0]);
    }
    fetchContents();
}

export default function ListaProdotti({ url }) {
    let [prodotti, setProdotti] = useState([]);

    useEffect(() => {
        fetchProducts(url, setProdotti);
    }, [])

    return (
        <div className='listaProdotti card'>
            <ul className='flex'>
                {prodotti.map((p) => (
                    <li key={p.id}>
                        <img src={p.images[0]}></img>
                        <div>{p.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}