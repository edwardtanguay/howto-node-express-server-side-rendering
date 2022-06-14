import axios from 'axios';
import fs from 'fs';

const getNouns = async () => {
    const nouns = (
        await axios.get(
            'https://edwardtanguay.netlify.app/share/germanNouns.json'
        )
    ).data;
    return new Promise((resolve, reject) => {
        resolve(nouns);
    });
};

const getBooks = () => {
    let rawdata = fs.readFileSync('./data/books.json');
    return JSON.parse(rawdata);
};

export const siteData = {
    siteTitle: "Info Site",
    nouns: await getNouns(),
    books: getBooks()
};
