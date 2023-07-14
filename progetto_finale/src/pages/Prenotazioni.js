import ListaPrenotazioni from '../components/ListaPrenotazioni';
import AggiungiPrenotazione from '../components/AggiungiPrenotazione';
import { useState } from 'react';

const Prenotazioni = () => {
    const corsiUrl = 'http://localhost:8000/corsi'
    const prenotazioniUrl = 'http://localhost:8000/prenotazioni'
    const [message, setMessage] = useState('')

    return (
        <div className="flex column content">
            <div className="contentCard" >
                <AggiungiPrenotazione
                    corsiUrl={corsiUrl}
                    setMessage={setMessage}
                    message={message} />
            </div>

            <div className="contentCard" >
                <ListaPrenotazioni corsiUrl={corsiUrl}
                    prenotazioniUrl={prenotazioniUrl}
                    message={message} />
            </div>
        </div>
    )
};

export default Prenotazioni;