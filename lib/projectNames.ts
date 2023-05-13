import { ProjectType } from '@/lib/projects';
import projectIndex from '../content/index.json';

const getProjectsByType = (type: ProjectType) =>
	Object.keys(projectIndex[type]);

export const getSites = () => getProjectsByType(ProjectType.SITE);
export const getUserscripts = () => getProjectsByType(ProjectType.USERSCRIPT);

export type ProjectsData = {
	type: ProjectType;
	list: string[];
};

export const getProjectSections = (): ProjectsData[] => {
	const projectTypes = Object.keys(projectIndex).filter(
		(key) => key !== 'index'
	) as ProjectType[];
	const result: ProjectsData[] = [];
	for (const type of projectTypes)
		result.push({
			type,
			list: getProjectsByType(type)
		});
	return result;
};
