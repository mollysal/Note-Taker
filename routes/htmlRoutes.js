const router = require('express').Router();
const path = require("path");

// Route to serve up the /public/index.html page or the Home Page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// Route to serve up the /public/notes.html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Route to serve up the /public/index.html page for any wildcards (*)
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

module.exports = router;