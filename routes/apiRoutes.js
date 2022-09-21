const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
// UUID (NPM Package) universally unique identifier 
const { v4: uuidv4 } = require('uuid');

// GET Method - Reading db.json file & returning in JSON format
router.get('/notes', (req, res) => {
    //Stephen said this method won't work b/c by the time you push into db the get will be outdated.
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
    const dbID = JSON.parse(req.params.id);
    console.log(dbID);
    //Read DB
    fs.readFile('../db/db.json', 'utf8', function (error, note) {
        if (error) {
            return console.log(error);
        }
        //define the data varable
        note = JSON.parse(data);
        //filter to the dbID
        note = note.filter(val => val.id !== dbID);

        //rewrite the db.json without the note removed
        fs.writeFile('../db/db.json', 'utf8', function (error, data) {
            if (error) {
                return error
            }
            res.json(note)
        })
    })   
})

//read notes
//filter through notes
//.then() pass through info
//.filter(filter for the deleted note id) - goes through each on 
//needs to pass through test 
//compare id to deleted notes id
//write back to db json file

// for (let i=0; i < db.length; i++) {
//     if(db[i].id === id) {
//         db.splice(i, 1);
//         console.log("Note deleted");
//     }
// }; 
// return;

module.exports = router;