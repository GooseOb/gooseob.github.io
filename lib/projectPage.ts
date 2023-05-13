import { AppParams } from '@/app/[lang]/layout';
import {
	getSites,
	getUserscripts,
	ProjectNamesGetter
} from '@/lib/projectNames';
import { NextPage } from 'next';

type StaticProjectParamsGeneratorGetter = (
	getProjects: ProjectNamesGetter
) => (args: { params: AppParams }) => { name: string }[];

const getStaticProjectParamsGenerator: StaticProjectParamsGeneratorGetter =
	(getProjects) => () =>
		getProjects().map((name) => ({ name }));

export const generateStaticSiteParams =
	getStaticProjectParamsGenerator(getSites);
export const generateStaticUserscriptParams =
	getStaticProjectParamsGenerator(getUserscripts);

type ProjectParams = AppParams & {
	name: string;
};

type Props = {
	params: ProjectParams;
};

export type ProjectPage<T = {}> = NextPage<Props & T>;
