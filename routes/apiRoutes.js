const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let id = '';

router.get('/api/notes', (req, res) => {
    res.json(db);
});

router.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    db.push(req.body);

    fs.write('./db/db.json', JSON.stringify(db), function (err) {
        if (err) console.log("Error writing file:", err);
        res.json(db);
        })
});

module.exports = router;