const express = require('express');
// import express from 'express';
const route = require('./src/routes/crmRoutes.js');
// import routes from './src/routes/crmRoutes';

// routes(app);

const app = express();
const PORT = 4445;

app.use(route);

app.get('/', (req, res) =>
    res.send(`Serveur node.js et express.js sur le trèèès fameux port ${PORT}`)
    );

app.listen(PORT, () => 
    console.log(`Your server was launched at http://localhost:${PORT}`)
    );


