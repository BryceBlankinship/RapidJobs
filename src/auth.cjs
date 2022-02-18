const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

/** This will be the REST API for users
 * Nothing too special will be going on here,
 * just querying MongoDB users database
 * Will have a separate database for user settings/configuration,
 * and separate js file for loading these configurations,
 * that js file will likely be called from React using state variables
 * (unless there is a better way, but managing data with state seems to be good since
 * fetching data usually means a component needs to be updated anyway)
 */

dotenv.config();

export function authenticateUser(email, password){
    console.log(email, password);
}

MongoClient.connect(process.env.DB_CONNECT, (err, client) => {
    if (err) { throw err } else console.log("Authentication to MongoDB successful!");
    let db = client.db('usersDB');
    db.collection('users').find().toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        client.close();
    });

});

let courses = [{ id: 1, name: 'course1' }, { id: 2, name: 'course2' }];

app.get('/api/courses/:id', (req, res) => {
    if (req.params.id) {
        const course = courses.find(c => c.id === parseInt(req.params.id));
        // get from database
        if (course) {
            res.send(course);
        } else {
            res.status(404).send(`The ID "${req.params.id}" does not have an associated course.`);
        }
    } else {
        res.status(400).send('ID is required.');
    }
});

app.post('/api/courses/', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    // upload to database
    res.send(course);
});

/** Get port from env file, or use port 3001 (env file uses port 3001 anyway)
 * Keeping this in here to remind myself that the 'or' operator in javascript
 * Will go with the first variable that exists, so if process.env.PORT is undefined,
 * It will default to using the second port, in this case 3001
 */
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on ${port}`));