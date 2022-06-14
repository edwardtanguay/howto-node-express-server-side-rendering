export const site = ({ siteTitle, nouns, books }) => {
	return `
	<h1>${siteTitle}</h1>
<div>There are ${books.length} books.</div>	
<div>There are ${nouns.length} nouns.</div>	
		
	<ul>${nouns
        .map((m) => `<li>${m.article} ${m.singular}</li>`)
        .join('')}</ul>`;
};
