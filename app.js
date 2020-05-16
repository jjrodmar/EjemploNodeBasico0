const express = require('express');
const app = express();

app.get('/', (req, res)=> {res.send('Hola don Pepito');});
app.get('/about', (req, res)=> {res.send('Hola don Jose');});

app.listen(8000, () => {console.log('Server in port 8000');});
