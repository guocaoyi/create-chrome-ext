import globSync from 'glob';

const pages = await globSync('pages/*.html')

const arrayKeyValuePairs = pages.map(file => [file.split('\\').slice(-1).toString().split('.html').join(''), file])

export const config = Object.fromEntries(arrayKeyValuePairs)
