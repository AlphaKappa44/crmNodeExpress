const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) =>
    res.send('La requète "GET /contact" est trouvée avec succès!')
    );

router.post('/contact', (req, res) =>
    res.send('La requète "POST /contact" est envoyée avec succès!')
    );

router.put('/contact/:contactId', (req, res) =>
    res.send('La requète "PUT /contact/:contactId" a modifié avec succès!')
    )

router.delete('/contact/:contactId', (req, res) =>
    res.send('La requète "DELETE /contact/:contactId" a supprimé avec succès!')
    );

module.exports = router;