import { use } from 'react';
import { Lang } from '@/lib/lang';
import { htmlFromMd, ModifiedMetaData } from '@/lib/markdownProcessor';

export type ProjectMetaData = {
	name: string;
	repo: string;
};

export type UserscriptMetaData = ProjectMetaData & {
	url?: string;
};

export type SiteMetaData = ProjectMetaData & {
	img: string;
	url: string;
	type: string;
	stack: string;
};

export const enum ProjectType {
	SITE = 'sites',
	USERSCRIPT = 'userscripts'
}

type Meta<T extends ProjectType> = T extends ProjectType.SITE
	? SiteMetaData
	: UserscriptMetaData;

const getProject = async <TType extends ProjectType>(
	type: TType,
	name: string,
	lang: Lang
) => {
	const data = await htmlFromMd<Meta<TType>>([lang, type, name]);
	if (type === ProjectType.SITE)
		(
			data.meta as ModifiedMetaData<SiteMetaData>
		).img ||= `/assets/${name}/index.jpg`;
	return data;
};

const getUserscript = (name: string, lang: Lang) =>
	getProject(ProjectType.USERSCRIPT, name, lang);

const getSite = (name: string, lang: Lang) =>
	getProject(ProjectType.SITE, name, lang);

export const useSite = (name: string, lang: Lang) => use(getSite(name, lang));
export const useUserscript = (name: string, lang: Lang) =>
	use(getUserscript(name, lang));
