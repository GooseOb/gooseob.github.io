import badges from '@/content/badges.json';
import { Replacer } from '@/lib/util';

type BadgeKey = keyof typeof badges;

// These only match as standalone, case-sensitive words:
// a generic case-insensitive match would badge every "c" and "make" on the site,
// and "jest" inside the Polish "jestem" ("I am")
const specialBadges: Record<string, BadgeKey> = {
	C: 'c',
	Make: 'make',
	Jest: 'jest'
};

const generalKeys = Object.keys(badges).filter(
	(key) => !Object.values(specialBadges).includes(key as BadgeKey)
);

const keywordsRegex = new RegExp(
	`(?<!http\\S*| \\S+="[^"]*)(${generalKeys.join('|')})`,
	'gi'
);

const specialRegex = new RegExp(
	`(?<!http\\S*| \\S+="[^"]*)(?<!\\w)(${Object.keys(specialBadges).join('|')})(?!\\w)`,
	'g'
);

const toBadge = ($0: string) =>
	`<img src='https://img.shields.io/badge/${
		badges[$0.toLowerCase() as BadgeKey]
	}' alt='${$0}' class='tech-label'>`;

const codeSegmentRegex = /(<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>)/g;

const replaceOutsideCodeBlocks = (text: string) =>
	text.replace(keywordsRegex, toBadge).replace(specialRegex, toBadge);

const groupBy: Replacer<[string]> = (text, separator) =>
	`<div>${text.split(separator).join('</div><div>')}</div>`.replace(
		/\\<\/div><div>/g,
		separator
	);

const group: Replacer = (text) => groupBy(groupBy(text, ','), ';');

export const replaceKeywordsByBadges: Replacer = (text) =>
	text
		.split(codeSegmentRegex)
		.map((part) =>
			part.startsWith('<pre') || part.startsWith('<code')
				? part
				: replaceOutsideCodeBlocks(part)
		)
		.join('');

export const replaceStackKeywordsByBadges: Replacer = (text) =>
	replaceKeywordsByBadges(group(text));
