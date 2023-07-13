import { useEffect, useState } from "react"
import axios from 'axios'

const GalleriaImmagini = ({ path, update }) => {
    const [index, setIndex] = useState(0)
    const [imgs, setImgs] = useState(['https://www.sisport.life/Style%20Library/Sisport/img/news/news_altre_categorie/interna/int_servizio_non_disponibile.jpg'])

    useEffect(() => {

        async function getImgs() {
            try {
                const response = await axios.get(path)
                setImgs(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getImgs()

    }, [path, update])

    function prev() {
        const i = index === 0 ? imgs.length - 1 : index - 1
        setIndex(i)
    }
    function next() {
        const i = index === imgs.length - 1 ? 0 : index + 1
        setIndex(i)
    }

    if (typeof imgs[0] == 'object') {
        return (
            <>
                <h2>{imgs[index].servizio.toUpperCase()}</h2>
                <div className="flex gallery">
                    <button className="galleryArrow" onClick={prev}><i className="fa-solid fa-chevron-left"></i></button>
                    <div><img className='galleryImgs' src={imgs[index].url} alt="volantino evento" /></div>
                    <button className="galleryArrow" onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div>
                    <p>{imgs[index].descrizione}</p>
                </div>
            </>
        )
    }

    return (
        <div className="flex gallery">
            <button className="galleryArrow" onClick={prev}><i className="fa-solid fa-chevron-left"></i></button>
            <div className='imgsContainer'>
                <img className='galleryImgs' src={imgs[index]} alt="volantino evento" />
            </div>
            <button className="galleryArrow" onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    )
}

export default GalleriaImmagini;