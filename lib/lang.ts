export const langText = Object.entries({
	en: 'english',
	be: 'беларуская',
	pl: 'polski'
} satisfies Record<Lang, string>) as [Lang, string][];

const langs = ['en', 'be', 'pl'] as const;

export type Lang = (typeof langs)[number];

const langObjArr = langs.map((lang) => ({ lang }));
export const getLangObjArr = () => langObjArr;
