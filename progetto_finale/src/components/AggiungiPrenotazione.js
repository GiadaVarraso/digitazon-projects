
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function AggiungiPrenotazione({ corsiUrl, setMessage ,message}) {
    const [icon, setIcon] = useState('fa-solid fa-chevron-down')
    const [toggleClass, setToggleClass] = useState('hide')
    const [corsi, setCorsi] = useState([]);
    const [prenotazioneData, setPrenotazioneData] = useState({
        nomeCliente: ''
    });
    const [corsoSelezionato, setCorsoSelezionato] = useState('');


    useEffect(() => {
        async function getCorsi() {
            try {
                const response = await axios.get(corsiUrl)
                setCorsi(response.data)
            } catch (error) {
                console.log('\nRISORSA NON TROVATA\n')
                console.log(error)
            }
        }
        getCorsi()
    }, [])

    function changeClass() {
        const newClass = toggleClass === 'hide' ? '' : 'hide'
        setToggleClass(newClass)

        const newIcon = icon === 'fa-solid fa-chevron-down' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'
        setIcon(newIcon)
    }

    async function postPrenotazione(idC) {
        let verify = Object.values(prenotazioneData).every(value => value !== '');
        const url = `http://localhost:8000/corsi/${idC}/prenotazioni`;

        if (verify) {
            try {
                const response = await axios.post(url, prenotazioneData);

                setMessage(response.data.message);
                setPrenotazioneData({
                    nomeCliente: ''
                })
            } catch (error) {
                console.log(error);
                console.log('\nPRENOTAZIONE NON AGGIUNTA\n');
            }
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPrenotazioneData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function selezionaCorso(event) {
        setCorsoSelezionato(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault(); 
        event.target.reset();
    }

    return (
        <div className="contentCard2">
            <div className="aggiungiCorso">
                <i className={icon}></i>
                <h1 onClick={changeClass}>
                    Aggiungi Prenotazione
                </h1>
            </div>
            <div className={toggleClass}>
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="nomeCliente">Nome</label>
                            <input type="text" id="nomeCliente" name="nomeCliente" value={prenotazioneData.nomeCliente} onChange={handleInputChange} placeholder='ex.: Mario Rossi' required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="corso">Corso</label>
                            <select id="corso" name="corso" onChange={selezionaCorso} required>
                                <option value="" key="0">Seleziona Corso</option>
                                {corsi.map((c, i) => <option key={c.id} value={c.id}>{c.nome} - {c.giorno} alle {c.orario}</option>)}
                            </select>
                        </div>
                        <button className="form-submit-btn" onClick={() => postPrenotazione(corsoSelezionato)}>Submit</button>
                    </form>
                </div>
                <b className='messageText'>
                    {message}
                </b>
            </div>
        </div>
    )
};