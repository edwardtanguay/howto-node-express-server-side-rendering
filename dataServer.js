import axios from 'axios';
import fs from 'fs';

const nouns = (await axios.get('https://edwardtanguay.netlify.app/share/germanNouns.json')).data;
const books = JSON.parse(fs.readFileSync('./data/books.json'));
const flashcards = ['nnn', 'ooo'];

export const siteData = {
    siteTitle: 'Info Site',
    nouns, 
    books,
    flashcards
};