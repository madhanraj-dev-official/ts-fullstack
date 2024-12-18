import express from 'express';
import path from 'path';
import rootDir from "../../rootDir";
const client = express.Router()

// Serve React client under `/`
client.use('', express.static(path.join(rootDir, 'frontend','client')));
client.get('/*', (req, res) => {
    console.log(req.url)

    res.sendFile(path.join(rootDir, 'frontend','client', 'index.html'));
});

export default client