const express = require('express'); 
const app = express(); 

const port = 8000;

app.get('/', (req, res) => { 
  res.send('Benvenuto al server di sviluppo web!');
});

 app.listen(port, () => {  
 console.log(`Il server è in ascolto sulla porta ${port}`); 
});