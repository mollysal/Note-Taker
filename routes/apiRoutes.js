const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

let id = '';

//`GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    db.push(req.body);

    fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
        if (err) console.log("Error writing file:", err);
        res.json(db);
    })
});
module.exports = router;