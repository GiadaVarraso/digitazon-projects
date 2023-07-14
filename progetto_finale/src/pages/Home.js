import GalleriaImmagini from "../components/GalleriaImmagini.js";
import Map from '../components/Map.js'
import Orari from "../components/Orari.js";
import AggiungiVolantino from '../components/AggiungiVolantino.js'

const Home = () => {
    const path = 'http://localhost:8000/images'

    return (
        <div className="flex column content">
            <div className="contentCard" >
                <div className="contentCard2">
                    <h1>Bacheca Avvisi ed Eventi</h1>
                    <GalleriaImmagini path={path} />
                    <AggiungiVolantino />
                </div>
            </div>
            <Map></Map>
            <Orari></Orari>
        </div>
    )
};

export default Home;