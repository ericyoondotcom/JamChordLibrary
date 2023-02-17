const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/library-data.json', (req, res) => {
    res.sendFile(__dirname + '/library-data.json');
});

app.listen(3030, () => console.log('Serving'));
