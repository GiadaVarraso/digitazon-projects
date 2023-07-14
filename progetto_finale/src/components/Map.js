export default function Map() {
    return (
        <div className="contentCard">
            <div className="contentCard2">
                <h1>Vieni a trovarci</h1>
                <div className="flex indirizzo">
                    <div>
                        <h3>© A.S.D. Team & Club ASKII SPORT Italia</h3>
                        <p>Via John Kennedy 25 10019 STRAMBINO (TO) 10019, Piemonte, Italy</p>
                        <p>A 200mt dalla stazione di Strambino. </p>
                        <p>Ampio parcheggio gratuito davanti alla sede</p>
                    </div>
                    <div>
                        <iframe title="mappa"                        
                            src="https://www.openstreetmap.org/export/embed.html?bbox=7.881660461425782%2C45.37709602745592%2C7.89545774459839%2C45.38222050518643&amp;layer=mapnik&amp;marker=45.379658339888216%2C7.888559103012085"
                            className="mappa">
                        </iframe>
                        <br />
                        <small>
                            <a href="https://www.openstreetmap.org/?mlat=45.37966&amp;mlon=7.88856#map=17/45.37966/7.88856&amp;layers=N">
                                Visualizza mappa ingrandita
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

