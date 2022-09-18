# Note-Taker
Module 11: Express.js: Note Taker


User Story: 
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Credit
* Starter Code Provided by UofM Bootcamp (The application’s front end was already created. The goal of this assignment was to build the back end, connect the two.)
* https://www.geeksforgeeks.org/how-to-build-note-taking-application-using-node-js/ 


## Notes
To install run 
```
npm install express
```


## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).