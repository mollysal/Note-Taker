const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
// UUID (NPM Package) universally unique identifier 
const { v4: uuidv4 } = require('uuid');

// GET Method - Reading db.json file & returning in JSON format
router.get('/notes', (req, res) => {
    res.json(db);
});

// POST Method - taking a new note & adding it to db.json file & then return the new note to the client
router.post('/notes', (req, res) => {
    // Adding a Uniquie ID to the body of each note object & pushing into the array
    req.body.id = uuidv4();
    db.push(req.body);

    // Writting the string to the db.json file
    // The 4 parameter signifys 4 spaces in the JSON file (Easier to Read)
    fs.writeFile('./db/db.json', JSON.stringify(db, null, 4), function (err) {
        if (err) console.log("Error writing file:", err);
        res.json(db);
    })
});

// BONUS TO DO: router.delete()

module.exports = router;