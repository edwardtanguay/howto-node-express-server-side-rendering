import axios from 'axios';
import fs from 'fs';
import Excel from 'exceljs';
import * as qfil from './qtools/qfil.js';
import * as qstr from './qtools/qstr.js';

const wb = new Excel.Workbook();

const nouns = (
    await axios.get(`https://edwardtanguay.netlify.app/share/germanNouns.json`)
).data;

const books = JSON.parse(fs.readFileSync('./data/books.json'));

const getTranslations = async () => {
    await wb.xlsx.readFile('./data/googleTranslations.xlsx');
    const translations = [];
    // const ws = wb.getWorksheet('Saved translations');
    const ws = wb.getWorksheet(1);
    for (let row = 2; row <= 100000; row++) {

        const fromLanguageCell = `A${row}`;
        const toLanguageCell = `B${row}`;
        const fromPhraseCell = `C${row}`;
        const toPhraseCell = `D${row}`;

		const fromLanguage= ws.getCell(fromLanguageCell).value;
		const toLanguage= ws.getCell(toLanguageCell).value;
		const fromPhrase= ws.getCell(fromPhraseCell).value;
		const toPhrase= ws.getCell(toPhraseCell).value;
        if (fromLanguage === null) {
            break;
        } else {
            translations.push({
                fromLanguage,
                toLanguage,
                fromPhrase,
                toPhrase
            });
        }
    }
    return translations;
};

const getJobs = () => {
	const jobFileNames = qfil.getSiteRelativePathAndFileNames('data/jobs');
    const jobs = [];
	jobFileNames.forEach((jobFileName) => {
        const fixedPathName = '\\' + qstr.replaceAll(jobFileName, '/', '\\');
        console.log(fixedPathName);
        const lines = qfil.getFileAsLines(`${fixedPathName}`)
        console.log(lines);
        jobs.push({
           title: "job title"
       }) 
	});
	return jobs;
};

export const siteData = {
    siteTitle: 'Info Site',
    nouns,
    books,
    translations: await getTranslations(),
    jobs: getJobs()
};
