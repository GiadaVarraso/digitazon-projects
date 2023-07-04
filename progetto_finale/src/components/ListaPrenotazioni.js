
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function ListaPrenotazioni({ corsiUrl, prenotazioniUrl, message }) {
    const [corsi, setCorsi] = useState([])
    const [prenotazioni, setPrenotazioni] = useState([])
    const hideClass = 'hide'
    const cancellaClass = ''
    const frecciaGiu = "fa-solid fa-chevron-down"
    const frecciaSu = 'fa-solid fa-chevron-up'

    let [expandArrow, setExpandArrow] = useState([])
    let [toggleClass, setToggleClass] = useState([])

    useEffect(() => {
        async function getCorsi() {
            try {
                const response = await axios.get(corsiUrl)
                setCorsi(response.data)
            } catch (error) {
                setCorsi('nessun corso disponibile')
                console.log(error)
            }
        }
        getCorsi()
    }, [])

    useEffect(() => {
        async function getPrenotazioni() {
            try {
                const response = await axios.get(prenotazioniUrl)
                setPrenotazioni(response.data)
            } catch (error) {
                setPrenotazioni('nessun corso disponibile')
                console.log(error)
            }
        }
        getPrenotazioni()
    }, [message])

    useEffect(() => {
        const nPrenotazioni = prenotazioni.length
        setToggleClass(Array(nPrenotazioni).fill(hideClass))
        setExpandArrow(Array(nPrenotazioni).fill(frecciaGiu))
    }, [corsi, prenotazioni])

    function changeClass(i) {
        const newClass = toggleClass[i] === hideClass ? cancellaClass : hideClass
        const newArrayClass = [...toggleClass]
        newArrayClass[i] = newClass
        setToggleClass(newArrayClass)

        const newArrow = expandArrow[i] === frecciaGiu ? frecciaSu : frecciaGiu
        const newArrayArrow = [...expandArrow]
        newArrayArrow[i] = newArrow
        setExpandArrow(newArrayArrow)
    }

    function InfoCorsi({ idCorso }) {
        const corso = corsi.filter((c) => c.id == idCorso)[0]
        return (
            <div className='infoCorso'>
                <div> {corso.nome} con {corso.istruttore} </div>
                <div> {corso.giorno} ore {corso.orario} </div>
            </div>
        )
    }

    function cancellaPrenotazione(idC, idP) {
        const url = `${corsiUrl}/${idC}/prenotazioni/${idP}`;

        async function deletePrenotazione() {

            try {
                await axios.delete(url);
                const updatedPrenotazioni = prenotazioni.filter((p) => p.idPrenotazione !== idP);
                setPrenotazioni(updatedPrenotazioni);
            } catch (error) {
                console.log(error);
                console.log('\nERRORE NELL\'ELIMINAZIONE DELLA PRENOTAZIONE\n');
            }
        }
        deletePrenotazione();
    }


    return (

        <div className="contentCard2">
            <h1>Prenotazioni</h1>
            {prenotazioni.map((p, i) => {
                return (
                    <div key={i} className='corso hoverGray' >
                        <div className='titoloCorso' onClick={() => changeClass(i)}>
                            <h2><i className={expandArrow[i]}></i>prenotazione n.{p.idPrenotazione} </h2>
                            <span><b>effettuata il {p.dataCreazione.data} alle {p.dataCreazione.orario}</b></span>
                        </div>
                        <div className={toggleClass[i]}>
                            <div className='infoPrenotazione'>
                                <div >
                                    <b>Cliente :</b> {p.nomeCliente}
                                </div>
                                <div>
                                    <b>Info Corso :</b>
                                    <InfoCorsi idCorso={p.idCorso}></InfoCorsi>
                                </div>
                            </div>
                            <button className='delete-btn' onClick={() => cancellaPrenotazione(p.idCorso, p.idPrenotazione)}>Elimina</button>
                        </div>
                    </div>)
            })}

        </div>
    )
};