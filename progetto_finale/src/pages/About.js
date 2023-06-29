import { useState, useEffect } from 'react'
import axios from 'axios'

export const Filosofia = () => {
  return (
    <div className="filosofia">
      <p>
        <b><q>Mens sana in corpore sano</q>:</b>
        <br />
        Non trasmettiamo solo il valore del divertimento legato allo sport,ma anche la filosofia del sano nutrimento.
        <br />
        Non offriamo solo corsi di fitness, ma anche corsi per rilassare la mente e trovare il giusto equilibrio per la mente.
        <br />
        Allenati. Divertiti. Sfogati.
      </p>
      <p>
        <b>Siamo attenti alle esigenze di tutti:</b>
        <br />
        ASKII SPORT ti offre tantissime opzioni per tutta la famiglia, perchè lo sport è di tutti, per tutti.
      </p>
      <p>
        <b>Ci mettiamo passione e professionalità:</b>
        <br />
        Sarai seguito da un team di professionisti certificati.
        <br />
        Troverai entusiasmo, serietà e sicurezza.
        <br />
        Il nostro centro è affiliato UISP.
      </p>
    </div>
    )
}

const About = () => {
  const [istruttori, setIstruttori] = useState([])

  useEffect(() => {

    async function call(id) {
      try {
        const url = id ? `http://localhost:8000/istruttori/${id}` : 'http://localhost:8000/istruttori'
        const response = await axios.get(url)
        setIstruttori(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    call()
  }, [])

  return (
    <div className="flex column content">
      <div className="contentCard">
        <div className="contentCard2">
          <h1>La nostra filosofia</h1>
          <Filosofia />
        </div>
      </div>

      <div className="contentCard">
        <div className="contentCard2 teamSection">

          <h1>Il nostro Team </h1>
          <ul>
            {istruttori.map((i) => {
              return (
                <li key={i.id}><b>{i.nome} : </b>{i.info}</li>
              )
            })}
          </ul>

          COLLABORIAMO ANCHE CON LA SCUOLA DI DANZA <a href="https://www.nuovoteatrostudiodanza.it/caluso/">NTSD</a>
          <br />
          <b>Vieni a conoscerci in sede!! Ti aspettiamo!</b>
        </div >
      </div>
    </div>
  )
};

export default About;
