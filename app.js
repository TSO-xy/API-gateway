const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
/*
const urlMap = new Map();
urlMap.set('http://localhost:8000', 'http://localhost:8080');
*/

const urlMapping = 
    [
        "http://localhost:8000", "http://localhost:8080"
        //, more url mappings go here.
    ];

const port = process.env.port || 8000;

app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
    console.log('listening on port: ' + port);
})