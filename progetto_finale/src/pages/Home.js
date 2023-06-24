import GalleriaImmagini from "../components/GalleriaImmagini";
import Map from '../components/Map.js'
const Home = () => {
    const path = 'http://localhost:8000/images'

    return (
        <div className="flex column">
        <div className="centralCol card">
            <h1>Bacheca Eventi</h1>
            <GalleriaImmagini path={path}></GalleriaImmagini>
        </div>
        <Map></Map>
        </div>
    )
};

export default Home;