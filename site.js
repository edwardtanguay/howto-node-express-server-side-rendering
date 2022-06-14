export const site = ({ siteTitle, nouns, books, translations }) => {
    return `
	<h1>${siteTitle}</h1>
	<div>There are ${books.length} books.</div>	
	<div>There are ${nouns.length} nouns.</div>	
	<div>There are ${translations.length} translations.</div>`
};
