import GalleriaImmagini from "../components/GalleriaImmagini";

const imgs = [
    '../img/esempioVolantino1.jpg',
    '../img/esempioVolantino2.jpg',
    '../img/esempioVolantino3.jpg',
    '../img/esempioVolantino4.jpg',
    '../img/esempioVolantino5.jpg',
    '../img/esempioVolantino6.jpg',
    '../img/esempioVolantino7.jpg',
    '../img/Fp6rmAUe_qxXxTDG6WF-P973JV29w782UgTmcTjSGcM=_plaintext_638230485707459477.jpg',
    '../img/IMG-20230622-WA0014.jpg',
    '../img/IMG-20230622-WA0015.jpg',
    '../img/IMG-20230622-WA0016.jpg',
    '../img/IMG-20230622-WA0017.jpg',
    '../img/IMG-20230622-WA0018.jpg',
    '../img/IMG-20230622-WA0019.jpg',
    '../img/IMG-20230622-WA0020.jpg',
    '../img/IMG-20230622-WA0021.jpg',
    '../img/IMG-20230622-WA0022.jpg',
    '../img/IMG-20230622-WA0023.jpg',
    '../img/IMG-20230622-WA0024.jpg',
    '../img/IMG-20230622-WA0025.jpg',
    '../img/IMG-20230622-WA0026.jpg',
    '../img/IMG-20230622-WA0027.jpg',
    '../img/IMG-20230622-WA0028.jpg',
    '../img/IMG-20230622-WA0029.jpg' 
];

const Home = () => {
    return (
        <div className="bacheca card">
            <h1>Bacheca Eventi</h1>
            <GalleriaImmagini imgs={imgs}></GalleriaImmagini>
        </div>
    )
};

export default Home;