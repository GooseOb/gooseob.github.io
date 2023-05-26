import badges from '@/content/badges.json';
import { Replacer } from '@/lib/util';

const keywordsRegex = new RegExp(`(${Object.keys(badges).join('|')})`, 'g');

const groupBy: Replacer<[string]> = (text, separator) =>
	`<div>${text.split(separator).join('</div><div>')}</div>`.replace(
		/\\<\/div><div>/g,
		separator
	);

const group: Replacer = (text) => groupBy(groupBy(text, ','), ';');

export const replaceKeywordsByBadges: Replacer = (text) =>
	text.replace(
		keywordsRegex,
		($0) =>
			`<img src='https://img.shields.io/badge/${
				badges[$0 as keyof typeof badges]
			}' alt='${$0}' class='tech-label'>`
	);

export const replaceStackKeywordsByBadges: Replacer = (text) =>
	replaceKeywordsByBadges(group(text));
