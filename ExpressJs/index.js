const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! ok nigro');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/phones', (req, res) => {
    res.json(phones);

});

app.get('/phones/:id', (req, res) => {
    const phone = phones.find(phone => phone.id === Number(req.params.id)) || {};
    res.json(phone);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});