import { express } from 'express';
import { authRoute } from './routes/authroute.js';

const app = {express}();

//route middleware
app.use('/api/user', authRoute);

app.listen(3001, () => console.log("server up and running"));