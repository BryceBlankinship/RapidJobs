const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const authRoute = require('./routes/authroute.cjs');



mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () => {
    console.log('connected to the db successfully!');
});

app.use(express.json());

//route middleware
app.use('/api/user', authRoute);

app.listen(3001, () => console.log("server up and running"));