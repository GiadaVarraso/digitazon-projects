
import axios from 'axios'
import { useEffect, useState } from 'react'

const Corsi = () => {
    let [corsi, setCorsi] = useState([])
    let [expandArrow, setExpandArrow] = useState([])
    let [toggleClass, setToggleClass] = useState([])

    useEffect(() => {
        async function getCorsi(id) {
            try {
                const url = id ? `http://localhost:8000/corsi/${id}` : 'http://localhost:8000/corsi'
                const response = await axios.get(url)
                setCorsi(response.data)
            } catch (error) {
                setCorsi('nessun corso disponibile')
                console.log(error)
            }
        }
        getCorsi()

    }, [])

    useEffect(() => {
        setToggleClass(Array(corsi.length).fill('hide'))
        setExpandArrow(Array(corsi.length).fill("fa-solid fa-chevron-down"))
    }, [corsi])



    console.log(expandArrow);

    function changeClass(i) {
        const newClass = toggleClass[i] === 'hide' ? '' : 'hide'
        const newArrayClass = [...toggleClass]
        newArrayClass[i] = newClass
        setToggleClass(newArrayClass)

        const newArrow = expandArrow[i] === "fa-solid fa-chevron-down" ? 'fa-solid fa-chevron-up' : "fa-solid fa-chevron-down"
        const newArrayArrow = [...expandArrow]
        newArrayArrow[i] = newArrow
        setExpandArrow(newArrayArrow)
        console.log(expandArrow);
    }

    return (
        <div className="flex column content">
            <div className="contentCard">
                <div className="contentCard2">
                    <h1>Corsi</h1>
                    {corsi.map((c, i) => {
                        return (
                            <div key={i} className='corso' onClick={() => changeClass(i)}>
                                <h2><i className={expandArrow[i]}></i> {c.nome} </h2>
                                <div className={toggleClass[i]}>
                                    <p>
                                        <b>Istruttore :</b> {c.istruttore}
                                        <br />
                                        <b>Descrizione :</b> {c.descrizione}
                                        <br />
                                        <b>Livello :</b> {c.livello}
                                        <br />
                                        <b>ORARI:</b>
                                    </p>
                                    <div>
                                        <ul>
                                            {c.orari.map((c, i) => <li key={i}> {c.giorno} alle {c.orario}</li>)}
                                        </ul>
                                    </div>
                                    <p>
                                        <b>Durata :</b> {c.durata}
                                        <br />
                                        <b>Posti totali :</b> {c.postiDisponibili}
                                    </p>
                                </div>
                            </div>)
                    })}

                </div>
            </div>
        </div>
    )
};

export default Corsi;