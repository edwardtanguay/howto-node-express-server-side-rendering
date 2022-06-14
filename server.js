import express from 'express';
import { site } from './site.js';
import { siteData } from './dataServer.js';

const app = express();
const port = 3007;

app.get('/', (req, res) => {
    res.send(site(siteData));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
