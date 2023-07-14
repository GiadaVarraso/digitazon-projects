
import ListaCorsi from '../components/ListaCorsi';
import AggiungiCorso from '../components/AggiungiCorso';

const Corsi = () => {
    const corsiUrl = 'http://localhost:8000/corsi'
    const istruttoriUrl = 'http://localhost:8000/istruttori'

    return (
        <div className="flex column content">
            <div className="contentCard">
                <AggiungiCorso corsiUrl={corsiUrl} istruttoriUrl={istruttoriUrl}></AggiungiCorso>
            </div>
            <div className="contentCard">
                <ListaCorsi url={corsiUrl} istruttoriUrl={istruttoriUrl}></ListaCorsi>
            </div>
        </div>
    )
};

export default Corsi;