// utilizzare https://fakestoreapi.com/products/categories
//  per ottenere tutti le categorie di prodotti.
// Mostrare quindi n colonne, dove n e' il numero di categorie 
// di prodotti, per ogni categoria,
//  mostrare tutti i prodotti di quella categoria nella sua colonna.

import { useEffect, useState } from "react"

function fetchContents(url,set){
    async function call(){
        let res=await fetch(url)
        let json=await res.json()
        set(json)
    }
    call()
}

function ProductsByCategory({allProducts,category}){
    let product=allProducts.filter((p)=>
        {
            if(p.category==category){
                return p
            }
        }
    )

    let res=product.map((p,i)=>
        <li 
        key={i} 
        id={p.id}
        >
        <div>{p.title}</div>
        <div><img src={p.image} width='60px'></img></div>
        </li>)

    return(
        <>
        {res}
        </>
    )
}

export default function ColumnStore(){
    let [category,setCategory]=useState([])
    let [column,setColumn]=useState('no Categories')
    let [allProducts,setAllProducts]=useState([])

    let urlCategory='https://fakestoreapi.com/products/categories'
    let urlAll='https://fakestoreapi.com/products'

    useEffect(()=>{
        fetchContents(urlCategory,setCategory)
        fetchContents(urlAll,setAllProducts)
    },[])
    
    useEffect(()=>{
        let columnTitle=category.map((cat,i)=> 
            <div key={i} className="columnFlex">
                <h2>{cat}</h2>
                <ol>
                    <ProductsByCategory allProducts={allProducts} category={cat}/>
                </ol>
            </div> 
            )
        setColumn(columnTitle)
    },[category])

    return(
        <>
        <h1>Column Store</h1>
        <div className="flex"> {column} </div>
        </>
    )
}