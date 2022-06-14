export const site = ({ siteTitle, nouns, books, translations, jobs }) => {
    return `
	<h1>${siteTitle}</h1>
	<div>There are ${books.length} books.</div>	
	<div>There are ${nouns.length} nouns.</div>	
	<div>There are ${translations.length} translations.</div>
	<div>There are ${jobs.length} jobs.</div>`
};
