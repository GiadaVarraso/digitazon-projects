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
    },[])

    useEffect(() => {
        async function getPrenotazioni() {
            try {
                const response = await axios.get(prenotazioniUrl)
                setPrenotazioni(response.data.reverse())
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

    function InfoCorsi({ idCorso, old }) {
        const corso = corsi.filter((c) => c.id == idCorso)[0]

        return corso ? (
            <div className='infoCorso'>
                <div> {corso.nome} con {corso.istruttore} </div>
                <div> {corso.giorno} {old} alle ore {corso.orario} </div>
            </div>
        ) : (<div> Corso non trovato </div>)
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
            <div className='scroll'>
                {
                    prenotazioni.map((p, i) =>
                        < div key={i} className={`corso hoverGray ${p.old ? 'pConclusa' : 'pAttiva'}`} >
                            <div className='titoloCorso' onClick={() => changeClass(i)}>
                                <h2><i className={expandArrow[i]}></i>{p.old ? 'CONCLUSA' : 'ATTIVA'} </h2>
                                <span><b>Prenotazione effettuata il {p.dataCreazione.data} alle {p.dataCreazione.orario}</b></span>
                            </div>
                            <div className={toggleClass[i]}>
                                <div className='infoPrenotazione'>
                                    <div className='prenotazioneCliente'>
                                        <b>Cliente :</b> {p.nomeCliente}
                                    </div>
                                    <div>
                                        <b>Info Corso :</b>
                                        <InfoCorsi idCorso={p.idCorso} old={p.old}></InfoCorsi>
                                    </div>
                                </div>
                                <button className='delete-btn' onClick={() => cancellaPrenotazione(p.idCorso, p.idPrenotazione)}>Elimina</button>
                            </div>
                        </div >
                    )
                }
            </div>
        </div>
    )
}; 