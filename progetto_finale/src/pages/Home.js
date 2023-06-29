import GalleriaImmagini from "../components/GalleriaImmagini";
import Map from '../components/Map.js'
import Orari from "../components/Orari";

const Home = () => {
    const path = 'http://localhost:8000/images'

    return (
        <div className="flex column content">
            <div className="contentCard" >
                <div className="contentCard2">
                    <h1>Bacheca Avvisi ed Eventi</h1>
                    <GalleriaImmagini path={path}></GalleriaImmagini>
                </div>
            </div>
            <Map></Map>
            <Orari></Orari>
        </div>
    )
};

export default Home;