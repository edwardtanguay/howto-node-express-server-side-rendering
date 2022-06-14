import axios from 'axios';

// export const nouns = (
//     await axios.get('https://edwardtanguay.netlify.app/share/germanNouns.json')
// ).data;

const getNouns = async () => {
    return new Promise((resolve, reject) => {
        resolve([
            { article: 'Henri', singular: 'nnn' }
        ]);
    });
};

export const data = {
	getNouns
};
