import axios from 'axios'
import DropzoneComponent from 'react-dropzone-component';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';

const ImageDropZone = () => {

    // Configurazione del componente DropzoneComponent
    const componentConfig = {
        postUrl: 'http://localhost:8000/upload' // L'URL per gestire il caricamento dei file sul server
    };

    // Event handler per il caricamento dei file
    const handleDrop = async (file) => {
        const formData = new FormData();
        formData.append("image", file); // Imposta l'immagine nel FormData con la chiave 'image'
        try {
            const response = await axios.post('http://localhost:8000/upload', formData);
            
            if (response.status === 200) {
                console.log('File caricato con successo!');
            } else {
                console.error('Errore durante il caricamento del file');
            }
        } catch (error) {
            console.error('Errore durante la richiesta AJAX', error);
        }
    };
    
    const refresh = () => window.location.reload()
    return (
        <>
            <DropzoneComponent 
                config={componentConfig}
                eventHandlers={{ drop: handleDrop }}
                djsConfig={{ acceptedFiles: 'image/*' }}
            />
            <button onClick={refresh} className="btn">Aggiungi Volantino</button>
        </>
    );
};

export default function AggiungiVolantino() {
    return (
        <div>
            <ImageDropZone />
        </div>
    )
}