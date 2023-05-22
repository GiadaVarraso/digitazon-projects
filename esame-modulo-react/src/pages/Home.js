import ListaProdotti from '../components/ListaProdotti'

export default function Home() {
    return (
        <>
            <div className='body'>

                <div className='bodySection flex'>
                    <button className='hover'><img src='https://cdn-icons-png.flaticon.com/512/271/271220.png' width='90px'></img></button>
                    <div className='flex directColumn'>
                        <div>
                            <h1>Goditi le tue serie TV</h1>
                            <h1>e i tuoi film preferiti</h1>
                        </div>
                        <div>
                            <h2>firetv con Alexa</h2>
                        </div>
                    </div>
                    <div>
                        <img src='https://www.saggiamente.com/wp-content/uploads/2018/06/firetvcube.jpg' width='300px'></img>
                    </div>
                    <button className='hover'><img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' width='90px'></img></button>
                </div>

                <div className='flex cards'>
                    <div className='card'>
                        <h3>Aiuta le persone in Emilia-Romagna</h3>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/29/donate/disaster/IT23_gecmisolsunturkiye_Desktop_Cards_379x304._SY304_CB613854889_.jpg'></img>
                    </div>
                    <div className='card'>
                        <h3>Offerte lampo</h3>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/29/donate/disaster/IT23_gecmisolsunturkiye_Desktop_Cards_379x304._SY304_CB613854889_.jpg'></img>
                    </div>
                    <div className='card'>
                        <h3>Suono nitido e bilanciato</h3>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/29/donate/disaster/IT23_gecmisolsunturkiye_Desktop_Cards_379x304._SY304_CB613854889_.jpg'></img>
                    </div>
                    <div className='card accedi'>
                        <h3>Accedi per un esperienza migliore</h3>
                        <button className='buttonAccedi'>Accedi in modo sicuro</button>
                    </div>
                </div>

                <ListaProdotti url='https://dummyjson.com/products'></ListaProdotti>

            </div>
        </>
    )
}