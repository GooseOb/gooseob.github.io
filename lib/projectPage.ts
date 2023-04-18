import { AppParams } from '@/app/[lang]/layout';
import { getSites, getUserscripts, ProjectGetter } from '@/lib/projectNames';
import { NextPage } from 'next';

const getStaticProjectParamsGenerator =
	(getProjects: ProjectGetter) =>
	async ({ params }: { params: AppParams }) => {
		const sites = await getProjects(params.lang);
		return sites.map((name) => ({ params: { name } }));
	};

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
