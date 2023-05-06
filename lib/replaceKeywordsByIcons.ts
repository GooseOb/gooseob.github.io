import icons from '@/content/icons.json';
import { Replacer } from '@/lib/util';

const keywordsRegex = new RegExp(`(${Object.keys(icons).join('|')})`, 'g');

const groupBy: Replacer<[string]> = (text, separator) =>
	`<div>${text.split(separator).join('</div><div>')}</div>`;

const group: Replacer = (text) => groupBy(groupBy(text, ','), ';');

export const replaceKeywordsByIcons: Replacer = (text) =>
	text.replace(
		keywordsRegex,
		($0) =>
			`<img src='${
				icons[$0 as keyof typeof icons]
			}' alt='${$0}' class='tech-label'>`
	);

export const replaceStackKeywordsByIcons: Replacer = (text) =>
	replaceKeywordsByIcons(group(text));
