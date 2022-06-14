export const site = ({ siteTitle, nouns, books, flashcards }) => {
	return `
	<h1>${siteTitle}</h1>
<div>There are ${books.length} books.</div>	
<div>There are ${nouns.length} nouns.</div>	
<div>There are ${flashcards.length} flashcards.</div>	
		
	<ul>${nouns
        .map((m) => `<li>${m.article} ${m.singular}</li>`)
        .join('')}</ul>`;
};
