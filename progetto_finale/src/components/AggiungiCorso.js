
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function AggiungiCorso({ corsiUrl, istruttoriUrl }) {
    let [icon, setIcon] = useState('fa-solid fa-chevron-down')
    let [toggleClass, setToggleClass] = useState('hide')
    let [istruttori, setIstruttori] = useState([])
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

    const [corsoData, setCorsoData] = useState({
        nome: '',
        istruttore: '',
        descrizione: '',
        livello: '',
        giorno: '',
        orario: '',
        durata: '60',
        postiDisponibili: 15,
    });

    useEffect(() => {
        async function getIstruttori() {
            try {
                const response = await axios.get(istruttoriUrl)
                setIstruttori(response.data)
            } catch (error) {
                console.log('\nNon è stato possibile ricavare gli istruttori dal server.\n')
                console.log(error)
            }
        }
        getIstruttori()
    }, [])

    function changeClass() {
        const newClass = toggleClass === 'hide' ? '' : 'hide'
        setToggleClass(newClass)

        const newIcon = icon === 'fa-solid fa-chevron-down' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'
        setIcon(newIcon)
    }

    async function postCorso() {
        let verify = Object.values(corsoData).every(value => value !== '');

        if (verify) {
            try {
                const response = await axios.post(corsiUrl, corsoData);
                console.log(response.data);
            } catch (error) {
                console.log('\nNon è stato possibile mandare il corso al server.\n')
                console.log(error);
            }
        }
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
            <div onClick={changeClass} className="aggiungiCorso">
                <i className={icon}></i>
                <h1 >
                    Aggiungi Corso
                </h1>
            </div>
            <div className={toggleClass}>
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
                        <button className="form-submit-btn" onClick={postCorso}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};