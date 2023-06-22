import fs from 'fs'
import path from 'path';

const getImgs = (req, res) => {
    const directoryPath = 'imgs/';

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log('Errore durante la lettura della directory:', err);
            return res.status(500).send('Errore durante la lettura della directory delle immagini');
        }

        const imageFiles = files.filter(file => {
            const extension = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif'].includes(extension);
        });

        const imageUrls = imageFiles.map(file => {
            return `${req.protocol}://${req.get('host')}/images/${file}`;
        });

        res.send(imageUrls);
    });
}

export {
    getImgs
}