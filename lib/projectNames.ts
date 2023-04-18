import { readdir } from 'fs/promises';
import { use } from 'react';
import { Lang } from '@/lib/lang';

const getFileNamesIn = async (dir: string) =>
	(await readdir('./content/' + dir)).map((fileName) =>
		fileName.replace(/\.md/, '')
	);

type ProjectGetter = (lang: Lang) => ReturnType<typeof getFileNamesIn>;

export const getSites: ProjectGetter = (lang) =>
	getFileNamesIn(lang + '/sites');
export const getUserscripts: ProjectGetter = (lang) =>
	getFileNamesIn(lang + '/userscripts');

type ProjectsData = {
	name: string;
	list: string[];
};

export const useProjects = (lang: Lang): ProjectsData[] => [
	{
		name: 'sites',
		list: use(getSites(lang))
	},
	{
		name: 'userscripts',
		list: use(getUserscripts(lang))
	}
];
