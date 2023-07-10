import GalleriaImmagini from "../components/GalleriaImmagini";

const Gym = () => {
    const path = 'http://localhost:8000/servizi'
    return (
        <div className="flex column content">
            <div className="contentCard">
                <div className="contentCard2">
                    <h1>Gym</h1>
                    <GalleriaImmagini path={path}></GalleriaImmagini>
                </div>
            </div>
        </div>
    )
};

export default Gym;
