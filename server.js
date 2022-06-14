import express from 'express';
import axios from 'axios';
import { site } from './site.js';

const app = express();
const port = 3007;

const nouns = (
    await axios.get('https://edwardtanguay.netlify.app/share/germanNouns.json')
).data;

app.get('/', (req, res) => {
    res.send(site(nouns));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
