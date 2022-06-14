export const site = (nouns) => {
    return `<ul>${nouns
        .map((m) => `<li>${m.article} ${m.singular}</li>`)
        .join('')}</ul>`;
};
