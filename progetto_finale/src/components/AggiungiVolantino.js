// import axios from 'axios'
import DropzoneComponent from 'react-dropzone-component';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';

const ImageDropZone = () => {
// DOCUMENTAZIONE: https://github.com/felixrieseberg/React-Dropzone-Component/blob/master/README.md#updating-the-components-properties
    const componentConfig = {
        postUrl: 'http://localhost:8000/upload'
    };
    
    // Event handler per il caricamento dei file 
    // const handleDrop = async (file) => {
    //     const formData = new FormData();
    //     formData.append("image", file);
    // Imposta l'immagine nel FormData con la chiave 'image'
    //     try {
    //         const response = await axios.post('http://localhost:8000/upload', formData);

    //         if (response.status === 200) {
    //             console.log('File caricato con successo!');
    //         } else {
    //             console.error('Errore durante il caricamento del file');
    //         }
    //     } catch (error) {
    //         console.error('Errore durante la richiesta AJAX', error);
    //     }
    // };

    const refresh = () => window.location.reload()
    return (
        <>
            <DropzoneComponent
                config={componentConfig} //Ho usato il config e le impostazioni di default del componente
                // eventHandlers={{ drop: handleDrop }}  // inutilizzato per il momento
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