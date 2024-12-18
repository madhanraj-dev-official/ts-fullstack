import express, { urlencoded } from 'express';
import client from './views/client';
import admin from './views/admin';
import api from './views/api';
import bodyParser from 'body-parser';
import cors from 'cors'
import asset from './views/asset';
// create express app
const app = express();

// for api testing
app.use(cors())
// body parser middleware
app.use(bodyParser())
app.use(urlencoded({extended:false}))


app.use('/static',asset)

// Serve API under `/api/v2/kalaimahal/sembanarkiol`
app.use('/api/v2/kalaimahal/sembanarkiol',api)

// Serve React App 2 under `/app2`
app.use('/admin/v2',admin);

// Serve React App 1 under `/app1`
app.use('/',client);

// Catch-all for unmatched routes
app.use((req, res) => {
    console.log(req.url)
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port \x1b[36mhttp://localhost:${PORT}`);
});
