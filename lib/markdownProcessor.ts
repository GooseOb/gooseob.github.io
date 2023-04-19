import { remark } from 'remark';
import html from 'remark-html';
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { replaceAsync } from '@/lib/util';
import filesMeta from '@/content/index.json';
import dict from '@/content/dict.json';
import { Lang } from '@/lib/lang';
import { replaceKeywordsByIcons } from '@/lib/replaceKeywordsByIcons';

export type DataFromMd<
	TMeta extends Record<string, any> = Record<string, any>
> = {
	meta: TMeta;
	content: string;
};

const resolveImports = (content: string, pathName: string) =>
	replaceAsync(
		content,
		/\[@include]\((.*?)\)/g,
		async ($0, $1) =>
			await resolveImportsHelper(path.resolve(pathName, '..', $1))
	);

const resolveImportsHelper = async (pathName: string): Promise<string> => {
	const fileContent = await readFile(pathName, 'utf-8');
	const { content } = matter(fileContent);

	return await resolveImports(content, pathName);
};

const resolveAlias = (text: string, pathName: string) =>
	text.replace(/]\(@(?=\/)/g, '](/assets/' + pathName);

const resolveCustomFunctions = (text: string, lang: Lang) =>
	text.replace(
		/@dict\((.*?)\)/g,
		($0, $1: keyof typeof dict.en) => dict[lang][$1]
	);

const processExtendedSyntax = (text: string) =>
	text
		.replace(
			/(>.*?>\s)<p>@style\((.*?)\)<\/p>/g,
			($0, $1, $2) => ` style="${$2}"${$1}`
		)
		.replace(
			/(>.*?>\s*?)@style\((.*?)\)/g,
			($0, $1, $2) => ` style="${$2}"${$1}`
		);

const remarkProcessor = remark().use(html);
export const htmlFromMd = async <T extends DataFromMd>(
	pathArr: string[]
): Promise<T> => {
	const pathName = `content/${pathArr.join('/')}.md`;

	const lang = pathArr.shift() as Lang;

	const meta = pathArr.reduce<Record<string, any>>(
		(acc, pathItem) => acc[pathItem as keyof typeof acc],
		filesMeta
	) as T['meta'];

	const fileContent = await readFile(pathName, 'utf-8');
	const { data, content } = matter(fileContent);

	const resolvedContent = resolveCustomFunctions(
		resolveAlias(await resolveImports(content, pathName), pathArr[1]),
		lang
	);

	const processedContent = await remarkProcessor.process(resolvedContent);

	return {
		meta: Object.assign(meta, data),
		content: replaceKeywordsByIcons(
			processExtendedSyntax(processedContent.toString())
		)
	} as T;
};
