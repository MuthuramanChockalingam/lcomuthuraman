const express = require('express');
const format = require('date-format');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => res.status(201).send("<h1>Welcome to Social App</h1>"));

app.get('/api/v1/instagram', (req, res) => {
    const instagram = {
        username: "polladhavan_ram",
        followers: 500,
        following: 100,
        date: format.asString('dd-MM-yyyy hh:mm:ss')
    };

    return res.status(200).json(instagram);
});

app.get('/api/v1/facebook', (req, res) => {
    const facebook = {
        username: "madura_ram",
        followers: 200,
        following: 70,
        date: format.asString('dd-MM-yyyy hh:mm:ss')
    };

    return res.status(200).json(facebook);
});

app.get('/api/v1/linkedin', (req, res) => {
    const linkedin = {
        username: "muthuramanc",
        followers: 499,
        following: 300,
        date: format.asString('dd-MM-yyyy hh:mm:ss')
    };

    return res.status(200).json(linkedin);
});

app.get('/api/v1/:token', (req, res) => {
    res.status(200).json({param: req.params.token});
});

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
