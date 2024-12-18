import express from 'express';
import path from 'path';
import rootDir from "../../rootDir";
const admin = express.Router()

// Serve React admin under `/admin/v2/`
admin.use('', express.static(path.join(rootDir, 'frontend','admin')));
admin.get('/*', (req, res) => {
    console.log(req.url)

    res.sendFile(path.join(rootDir, 'frontend','admin', 'index.html'));
});


export default admin