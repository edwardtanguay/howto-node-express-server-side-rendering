import axios from 'axios';

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

export const data = {
    getNouns
};
