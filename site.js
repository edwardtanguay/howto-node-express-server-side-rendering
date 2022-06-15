export const site = ({ siteTitle, nouns, books, translations, jobs }) => {
    return `

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Info Site</title>
<style>
	div.job {
		background-color: #eee;
		padding: 5px 20px 10px 20px;
		margin: 10px 0 10px 0;
		font-family: arial;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	div.job h1 {
		font-size: 1.4rem;
	}
	div.job h2 {
		font-size: 1.2rem;
	}
</style>
</head>
<body>

	<h1>${siteTitle}</h1>
	<div>There are ${books.length} books.</div>	
	<div>There are ${nouns.length} nouns.</div>	
	<div>There are ${translations.length} translations.</div>
	<div>There are ${jobs.length} jobs.</div>

	<div class="jobs">
${jobs.map((job) => `
<div class="job">
	<div class="body">${job.html}</div>
</div>
	
</body>
</html>
`).join('')}
	</div>`;
};
