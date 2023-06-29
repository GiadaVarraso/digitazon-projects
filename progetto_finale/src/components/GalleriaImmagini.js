import { useEffect, useState } from "react"
import axios from 'axios'

const GalleriaImmagini = ({ path }) => {
    const [index, setIndex] = useState(0)
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        async function getImgs() {
            const response = await axios.get(path)
            setImgs(response.data)
        }
        getImgs()
    }, [path])

    function prev() {
        const i = index === 0 ? imgs.length - 1 : index - 1
        setIndex(i)
    }
    function next() {
        const i = index === imgs.length - 1 ? 0 : index + 1
        setIndex(i)
    }
    return (
        <div className="flex gallery">
            <button className="galleryArrow" onClick={prev}><i className="fa-solid fa-chevron-left"></i></button>
            <img className='galleryImgs' src={imgs[index]} alt="volantino evento" />
            <button className="galleryArrow" onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    )
}

export default GalleriaImmagini;