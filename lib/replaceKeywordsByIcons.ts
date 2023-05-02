import icons from '@/content/icons.json';

const keywordsRegex = new RegExp(`(${Object.keys(icons).join('|')})`, 'g');

const groupBy = (separator: string, text: string) =>
	`<div>${text.split(separator).join('</div><div>')}</div>`;

const group = (text: string) => groupBy(';', groupBy(',', text));

export const replaceKeywordsByIcons = (text: string) =>
	text.replace(
		keywordsRegex,
		($0) =>
			`<img src='${
				icons[$0 as keyof typeof icons]
			}' alt='${$0}' class='tech-label'>`
	);

export const replaceStackKeywordsByIcons = (text: string) =>
	replaceKeywordsByIcons(group(text));
