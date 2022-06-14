import express from 'express';
import { site } from './site.js';
import { data } from './data.js';

const app = express();
const port = 3007;

const nouns = await data.getNouns();

app.get('/', (req, res) => {
    res.send(site(nouns));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
