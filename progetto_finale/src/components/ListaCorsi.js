
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function ListaCorsi({ url, istruttoriUrl }) {
    let [corsi, setCorsi] = useState([])
    let [expandArrow, setExpandArrow] = useState([])
    let [toggleClass, setToggleClass] = useState([])
    let [classModModifica, setClassModModifica] = useState([])
    const [corsoData, setCorsoData] = useState({});
    let [istruttori, setIstruttori] = useState([])
    let [index, setIndex] = useState(0)

    const giorni = [
        'Lunedì',
        'Martedì',
        'Mercoledì',
        'Giovedì',
        'Venerdì',
        'Sabato',
        'Domenica',
    ]
    const livello = ['Principiante', 'Intermedio', 'Avanzato']

    useEffect(() => {
        async function getIstruttori() {
            try {
                const response = await axios.get(istruttoriUrl)
                setIstruttori(response.data)
            } catch (error) {
                console.log('\nRISORSA NON TROVATA\n')
                console.log(error)
            }
        }
        getIstruttori()
    }, [])


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
        setClassModModifica(Array(corsi.length).fill('hide'))
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

        deleteCorso()
        const updatedCorsi = corsi.filter((corso) => corso.id !== id);
        setCorsi(updatedCorsi);
    }

    useEffect(() => {
        async function getCorsoById() {
            try {
                const response = await axios.get(`${url}/${index}`)
                setCorsoData(response.data)
            } catch (error) {
                console.log('\nRISORSA NON TROVATA\n')
                console.log(error)
            }
        }
        getCorsoById()

    }, [index])

    function modModifica(i, corsoId) {
        const newClass = classModModifica[i] === 'hide' ? '' : 'hide'
        setClassModModifica(classModModifica.fill('hide'))
        const newArrayClass = [...classModModifica]
        newArrayClass[i] = newClass
        setClassModModifica(newArrayClass)
        setIndex(corsoId)
    }

    function modifica(id) {
        async function putCorso() {
            const url = `http://localhost:8000/corsi/${id}`;
            try {
                const response = await axios.put(url, corsoData);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        putCorso()
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setCorsoData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div className="contentCard2">
            <h1>Corsi</h1>
            {corsi.map((c, i) => {
                return (
                    <div key={i} className='corso hoverGray' >
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
                            <button className='mod-btn' onClick={() => modModifica(i, c.id)}>Modifica</button>
                        </div>
                        <div className={classModModifica[i]}>
                            <div className="form-container">
                                <form className="form">
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" name="nome" value={corsoData.nome} onChange={handleInputChange} placeholder='ex.: Zumba ...' required></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="istruttore">Istruttore</label>
                                        <select id="istruttore" name="istruttore" value={corsoData.istruttore} onChange={handleInputChange} required>
                                            <option value="" key="0">Seleziona Istruttore</option>
                                            {istruttori.map((i) => <option value={i.nome} key={i.id}>{i.nome}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descrizione">Descizione</label>
                                        <input type="text" id="descrizione" name="descrizione" value={corsoData.descrizione} onChange={handleInputChange} placeholder="ex.: Brucia calorie con ritmo e divertimento! ..." required></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="livello">Livello</label>
                                        <select id="livello" name="livello" value={corsoData.livello} onChange={handleInputChange} required>
                                            <option value="" key="0">Seleziona Livello</option>
                                            {livello.map((liv, index) => <option value={liv} key={index}>{liv}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="giorno">Giorno</label>
                                        <select id="giorno" name="giorno" value={corsoData.giorno} onChange={handleInputChange} required>
                                            <option value="" key="0">Seleziona giorno</option>
                                            {giorni.map((g, i) => <option value={g} key={i}>{g}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="orario">Orario</label>
                                        <input type="time" id="orario" name="orario" value={corsoData.orario} onChange={handleInputChange} required></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="durata">Durata (in minuti) </label>
                                        <input type="number" id="durata" min='1' name="durata" value={corsoData.durata} onChange={handleInputChange} required></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="postiDisponibili">Posti Totali</label>
                                        <input type="number" id="postiDisponibili" min='1' name="postiDisponibili" value={corsoData.postiDisponibili} onChange={handleInputChange} required></input>
                                    </div>
                                    <div className='form-modify-btn'>
                                        <button className="form-submit-btn" onClick={() => modifica(c.id)}>Aggiorna</button>
                                        <button type='button' className="form-submit-btn" onClick={() => modModifica(i,c.id)}>Annulla</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>)
            })}

        </div>
    )
};