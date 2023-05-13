import { AppParams } from '@/app/[lang]/layout';
import {
	getSites,
	getUserscripts,
	ProjectNamesGetter
} from '@/lib/projectNames';
import { NextPage } from 'next';

const getStaticProjectParamsGenerator =
	(getProjects: ProjectNamesGetter) => () =>
		getProjects().map((name) => ({ name }));

export const generateStaticSiteParams =
	getStaticProjectParamsGenerator(getSites);
export const generateStaticUserscriptParams =
	getStaticProjectParamsGenerator(getUserscripts);

interface ProjectParams extends AppParams {
	name: string;
}

type Props = {
	params: ProjectParams;
};

export type ProjectPage<T = {}> = NextPage<Props & T>;
