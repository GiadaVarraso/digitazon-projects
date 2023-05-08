import {useState,useEffect} from 'react'
/* la funzione fetch è globalmente disponibile e serve per fare delle chiamate a dei contenuti esterni 
in questo caso volevamo farci dare da un server la lista dei prodotti, edentificati a quell url
bisogna metterci in un contesto asincrono. per farlo usiamo la parola chiave async
per aspettare che una funzione asincrona abbia finito usiamo await
poi possiamo prendere tramite il metodo json il json corrispondente. 
non possiamo utilizzare lo useState nel contesto asincrono.
dobbiamo importare anche useEffect
dobbiamo circondare il nostro codice attraverso useEffect (che accetta come parametro una funzione )
*/ 
export function Fetch() {
    const [products,setProducts]= useState([])
    useEffect(()=> {
        async function fetchProducts(){
        let res=await fetch("https://fakestoreapi.com/products")
        let json=await res.json()
        setProducts(json)
    }
    fetchProducts()
},[])
    return(
        <>
        <h1>Fetch</h1>
        {products.map((el)=>
            (
                <div key={el.id}>
                <h2>{el.title}</h2>
                <img src={el.image} alt='product'></img>
                </div>
            )
        )}
        </>
    )
}