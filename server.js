const express = require('express');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

const PORT = process.env.port || 3001;
const app = express();

//Need access ot public Folder before routes
app.use(express.static('public'));
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoute);
app.use('/', htmlRoute);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);