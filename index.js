const express = require('express');
// import express from 'express';
// const route = require('./src/routes/crmRoutes.js');
// import routes from './src/routes/crmRoutes';

// routes(app);

const app = express();
const PORT = 4445;

// app.use(route);

app.get('/', (req, res) =>
    res.send(`Serveur node.js et express.js sur le trèèès fameux port ${PORT}`)
    );

app.listen(PORT, () => 
    console.log(`Your server was launched at http://localhost:${PORT}`)
    );

app.get('/contact', (req, res) =>
    res.send('La requète "GET /contact" est trouvée avec succès!')
    );
app.post('/contact', (req, res) =>
    res.send('La requète "POST /contact" est envoyée avec succès!')
    );

app.put('/contact/:contactId', (req, res) =>
    res.send('La requète "PUT /contact/:contactId" a modifié avec succès!')
    )

app.delete('/contact/:contactId', (req, res) =>
    res.send('La requète "DELETE /contact/:contactId" a supprimé avec succès!')
    );

