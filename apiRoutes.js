const router = require('express').Router();
const db = require('./db/db.json'); //Not Live
const util = require('util');
const fs = require('fs');
// UUID (NPM Package) universally unique identifier 
const { v4: uuidv4 } = require('uuid');

// GET Method - Reading db.json file & returning in JSON format
router.get('/notes', (req, res) => {
    //Stephen said this method won't work b/c by the time you post into db the get will be outdated.
    res.json(db);
    //said to use this for delete method:
    //fs.readFile('db/db.json', (err, data) => err ? res.status(500).json(err) : res.json(data));
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
router.delete('/notes/:id', (req, res) => {
    //define the dbID varaible as the id parameter
    const DBid = req.params.id;
    db.splice(DBid, 1);
    //rewrite the db.json without the note removed
    fs.writeFileSync('./db/db.json', JSON.stringify(db, null, 4));
    res.json(req.body);
})

module.exports = router;