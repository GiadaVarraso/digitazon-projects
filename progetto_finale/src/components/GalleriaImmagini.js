import { useState } from "react"

const GalleriaImmagini=({imgs})=>{
    const {index,setIndex}=useState(0)
    
    function prev(){
        console.log('click prev')
        console.log(imgs)
    }
    function next(){
        console.log('click next')
    }
    return (
        <div>
            <button onClick={prev}><i className="fa-solid fa-chevron-left galleryArrow"></i></button>
            <img src={imgs[0]} alt="volantino evento" />
            <button onClick={next}><i className="fa-solid fa-chevron-right galleryArrow"></i></button>
        </div>
    )
}

export default GalleriaImmagini;