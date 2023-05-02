import { Lang } from '@/lib/lang';

const apostrophe: Record<Lang, string> = {
	en: '’',
	be: 'ʼ',
	pl: '’'
};

export const fixApostrophes = (text: string, lang: Lang) =>
	text.replace(/(?<!\\)'/g, apostrophe[lang]);
