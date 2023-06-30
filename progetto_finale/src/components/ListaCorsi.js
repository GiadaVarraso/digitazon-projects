
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function ListaCorsi({ url }) {
    let [corsi, setCorsi] = useState([])
    let [expandArrow, setExpandArrow] = useState([])
    let [toggleClass, setToggleClass] = useState([])

    useEffect(() => {
        async function getCorsi() {
            try {
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

    function changeClass(i) {
        const newClass = toggleClass[i] === 'hide' ? '' : 'hide'
        const newArrayClass = [...toggleClass]
        newArrayClass[i] = newClass
        setToggleClass(newArrayClass)

        const newArrow = expandArrow[i] === "fa-solid fa-chevron-down" ? 'fa-solid fa-chevron-up' : "fa-solid fa-chevron-down"
        const newArrayArrow = [...expandArrow]
        newArrayArrow[i] = newArrow
        setExpandArrow(newArrayArrow)
    }

    function cancellaCorso(id) {
        async function deleteCorso() {
            const cancellaCorsoUrl = `${url}/${id}`;

            try {
                const response = await axios.delete(cancellaCorsoUrl);
                console.log(response.data);
            } catch (error) {
                console.log('\nNON CANCELLATO\n');
                console.error(error);
            }
        }

        deleteCorso(id)
        const updatedCorsi = corsi.filter((corso) => corso.id !== id);
        setCorsi(updatedCorsi);
    }

    return (
        <div className="contentCard2">
            <h1>Corsi</h1>
            {corsi.map((c, i) => {
                return (
                    <div key={i} className='corso' >
                        <div className='titoloCorso' onClick={() => changeClass(i)}>
                            <h2><i className={expandArrow[i]}></i> {c.nome} </h2>
                            <span><b>{c.giorno} alle {c.orario}</b></span>
                        </div>
                        <div className={toggleClass[i]}>
                            <ul className='infoCorso'>
                                <li>
                                    <b>Istruttore :</b> {c.istruttore}
                                </li>
                                <li>
                                    <b>Descrizione :</b> {c.descrizione}
                                </li>
                                <li>
                                    <b>Livello :</b> {c.livello}
                                </li>
                                <li>
                                    <b>Durata :</b> {c.durata} min
                                </li>
                                <li>
                                    <b>Posti totali :</b> {c.postiDisponibili}
                                </li>
                            </ul>
                            <button className='delete-btn' onClick={() => cancellaCorso(c.id)}>Elimina</button>
                        </div>
                    </div>)
            })}

        </div>
    )
};