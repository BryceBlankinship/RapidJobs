import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import cardsRouter from './cards.js';
import authMiddleware from './auth.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware)

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Connected to RapidJobs MongoDB Card Database!');
})

app.use('/api/cards', cardsRouter);

app.listen(process.env.PORT || 8000);