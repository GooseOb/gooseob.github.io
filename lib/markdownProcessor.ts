import { remark } from 'remark';
import html from 'remark-html';
import { readFile, stat } from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import filesMeta from '@/content/index.json';
import dict from '@/content/dict.json';
import { Lang } from '@/lib/lang';
import {
	replaceAsync,
	composeReplacers,
	Replacer,
	AsyncReplacer
} from '@/lib/util';
import { replaceKeywordsByBadges } from '@/lib/replaceKeywordsByBadges';
import { fixApostrophes } from '@/lib/fixApostrophes';
import { Meta, ProjectMetaData, ProjectType } from '@/lib/projects';

export type DataFromMd<TMeta extends ProjectMetaData> = {
	meta: TMeta;
	content: string;
};

const resolveImports: AsyncReplacer<[string]> = (content, pathName) =>
	replaceAsync(content, /\[@include]\((.*?)\)/g, ($0, $1) =>
		resolveImportsHelper(path.resolve(pathName, '..', $1))
	);

const resolveImportsHelper = async (pathName: string): Promise<string> => {
	const fileContent = await readFile(pathName, 'utf-8');
	const { content } = matter(fileContent);

	return await resolveImports(content, pathName);
};

const resolveAlias: Replacer<[string]> = (text, pathName) =>
	text.replace(/]\(@(?=\/)/g, '](/assets/' + pathName);

const resolveCustomFunctions: Replacer<[Lang]> = (text, lang) =>
	text.replace(
		/@dict\((.*?)\)/g,
		($0, $1: keyof typeof dict.en) => dict[lang][$1]
	);

const processExtendedSyntax: Replacer = (text) =>
	text
		.replace(
			/(>.*?>\s)<p>@style\((.*?)\)<\/p>/g,
			($0, $1, $2) => ` style="${$2}"${$1}`
		)
		.replace(
			/(>.*?>\s*?)@style\((.*?)\)/g,
			($0, $1, $2) => ` style="${$2}"${$1}`
		);

const makeImagesLazy: Replacer = (text) =>
	text.replace(/<img/g, '<img loading="lazy" decoding="async"');

const preprocess = composeReplacers([resolveCustomFunctions, fixApostrophes]);
const postprocess = composeReplacers([
	processExtendedSyntax,
	replaceKeywordsByBadges,
	makeImagesLazy
]);

export type ModifiedMetaDataOfType<T extends ProjectType> = Meta<T> & {
	lastModified: Date;
};
type ProcessReturnType<TType extends ProjectType> = DataFromMd<
	ModifiedMetaDataOfType<TType>
>;

type ProjectFilePath<TType extends ProjectType> = [
	lang: Lang,
	type: TType,
	name: string
];
type IndexFilePath = [lang: Lang, name: string];

const remarkProcessor = remark().use(html);
export const htmlFromMd = async <TType extends ProjectType>(
	pathArr: ProjectFilePath<TType> | IndexFilePath
): Promise<ProcessReturnType<TType>> => {
	const pathName = `content/${pathArr.join('/')}.md`;

	const lang = pathArr.shift() as Lang;

	// @ts-ignore
	const meta = pathArr.reduce<Record<string, any>>(
		(acc, pathItem) => acc[pathItem as keyof typeof acc],
		filesMeta
	) as any as ModifiedMetaDataOfType<TType>;

	const [fileContent, { mtime }] = await Promise.all([
		readFile(pathName, 'utf-8'),
		stat(pathName)
	]);

	meta.lastModified = new Date(mtime);

	const { data, content } = matter(fileContent);

	const resolvedContent = preprocess(
		resolveAlias(await resolveImports(content, pathName), pathArr[1]),
		lang
	);

	const processedContent = await remarkProcessor.process(resolvedContent);

	return {
		meta: Object.assign(meta, data),
		content: postprocess(processedContent.toString())
	} as ProcessReturnType<TType>;
};
