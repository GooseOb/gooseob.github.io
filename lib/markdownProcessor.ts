import { remark } from 'remark';
import html from 'remark-html';
import { readFile } from 'fs/promises';
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

const cachedFiles: Record<string, string> = {};
const resolveImportsHelper = async (pathName: string): Promise<string> => {
	if (process.env.NODE_ENV === 'development' || !cachedFiles[pathName]) {
		cachedFiles[pathName] = matter(await readFile(pathName, 'utf-8')).content;
	} else {
		console.log(pathName, 'is from cache');
	}

	return resolveImports(cachedFiles[pathName], pathName);
};

const resolveAlias: Replacer<[string]> = (text, pathName) =>
	text.replace(/]\(@(?=\/)/g, '](/assets/' + pathName);

const componentsRegex = /@component\s+(\S+?)\s*\{\s*([\S\s]+?)\s*}/g;
const components: Record<string, string> = {};
type PreprocessReplacer = Replacer<[Lang]>;
const resolveCustomComponents: PreprocessReplacer = (text) => {
	text = text.replace(componentsRegex, ($0, $1, $2) => {
		components[$1] = $2;
		return '';
	});
	const componentNames = Object.keys(components);
	return componentNames.length
		? text.replace(
				new RegExp(`(${componentNames.join('|')})\\((.+?)\\)`, 'g'),
				($0, $1: string, $2: string) => {
					const args = $2.split(',').map((a) => a.trim());
					const componentContent = components[$1];
					if (!componentContent) return $0;
					return componentContent.replace(
						/\$(\d+)/g,
						($1, $2) => args[$2] || lackOfComponentArgs($0)
					);
				}
		  )
		: text;
};

const lackOfComponentArgs = (componentName: string) => {
	throw 'too little arguments in the component ' + componentName;
};

const logAndContinue = <T>(arg: T) => {
	console.log(arg);
	return arg;
};

const resolveCustomFunctions: PreprocessReplacer = (text, lang) =>
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

const preprocess = composeReplacers([
	resolveCustomComponents,
	resolveCustomFunctions,
	fixApostrophes
]);
const postprocess = composeReplacers([
	processExtendedSyntax,
	replaceKeywordsByBadges,
	makeImagesLazy
]);

export type ModifiedMetaDataOfType<T extends ProjectType> = Meta<T>;
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
const readMdFile = (pathName: string) => readFile(pathName, 'utf-8');
export const htmlFromMd = async <TType extends ProjectType>(
	pathArr: ProjectFilePath<TType> | IndexFilePath
): Promise<ProcessReturnType<TType>> => {
	const pathName = `content/${pathArr.join('/')}.md`;

	const lang = pathArr.shift() as Lang;

	const meta = pathArr.reduce(
		// @ts-ignore
		(acc, pathItem) => acc[pathItem as keyof typeof acc],
		filesMeta
	) as any as ModifiedMetaDataOfType<TType>;

	const { data, content } = matter(await readMdFile(pathName));

	const resolvedContent = preprocess(
		resolveAlias(await resolveImports(content, pathName), pathArr[1]),
		lang
	);

	const processedContent = await remarkProcessor.process(resolvedContent);

	return {
		meta: Object.assign(meta, data),
		content: postprocess(processedContent.toString())
	};
};
