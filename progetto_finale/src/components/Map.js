export default function Map(){
    return (
        <div className="card centralCol">
                <iframe
                    width="425"
                    height="350"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=7.881660461425782%2C45.37709602745592%2C7.89545774459839%2C45.38222050518643&amp;layer=mapnik&amp;marker=45.379658339888216%2C7.888559103012085"
                    style={{border:'1px solid black'}}>
                </iframe>
                <br />
                <small>
                    <a href="https://www.openstreetmap.org/?mlat=45.37966&amp;mlon=7.88856#map=17/45.37966/7.88856&amp;layers=N">
                        Visualizza mappa ingrandita
                    </a>
                </small>
            </div>
    )
}

