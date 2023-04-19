import { use } from 'react';
import { Lang } from '@/lib/lang';
import { DataFromMd, htmlFromMd } from '@/lib/markdownProcessor';

type ProjectMetaData = {
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

type Project = DataFromMd<ProjectMetaData>;
export type Userscript = DataFromMd<UserscriptMetaData>;
export type Site = DataFromMd<SiteMetaData>;

const enum ProjectType {
	SITE = 'sites',
	USERSCRIPT = 'userscripts'
}

const getProject = async <T extends Project>(
	type: string,
	lang: Lang,
	name: string
): Promise<T> => {
	const data = await htmlFromMd<T>([lang, type, name]);
	if (type === ProjectType.SITE)
		(data.meta as SiteMetaData).img ||= `/assets/${name}/index.jpg`;
	return data;
};

const getUserscript = (name: string, lang: Lang): Promise<Userscript> =>
	getProject(ProjectType.USERSCRIPT, lang, name);

const getSite = (name: string, lang: Lang): Promise<Site> =>
	getProject(ProjectType.SITE, lang, name);

export const useSite = (name: string, lang: Lang) => use(getSite(name, lang));
export const useUserscript = (name: string, lang: Lang) =>
	use(getUserscript(name, lang));
