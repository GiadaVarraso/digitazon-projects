export default function Carrello({prodotti =[{}]}){
    return(
        <>
            <ul>
                {prodotti.map((p)=> p.title? <li>{p.title}</li>:<h2>nessun prodotto è ancora stato aggiunto</h2>)}
            </ul>
        </>
    )
}