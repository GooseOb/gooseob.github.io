import { ArrayElement } from '@/lib/util';

export const langText = Object.entries({
	en: 'english',
	be: 'беларуская',
	pl: 'polski'
} satisfies Record<Lang, string>) as [Lang, string][];

const langs = ['en', 'be', 'pl'] as const;

export type Lang = ArrayElement<typeof langs>;

export const langObjArr = langs.map((lang) => ({ lang }));
