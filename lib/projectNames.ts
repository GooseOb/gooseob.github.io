import { ProjectType } from '@/lib/projects';
import projectIndex from '../content/index.json';
import badges from '../content/badges.json';

const getProjectsByType = (type: ProjectType) =>
	Object.keys(projectIndex[type]);

export type ProjectNavItem = {
	name: string;
	badgeSrc: string | null;
	badgeAlt: string;
};

// Badge is set manually per project via the "badge" field in index.json.
// The badge keeps the technology's color/logo, but the label becomes the project name.
const badgeOf = (
	name: string,
	badgeKey: string | undefined
): Pick<ProjectNavItem, 'badgeSrc' | 'badgeAlt'> => {
	const badge =
		badgeKey && (badges[badgeKey as keyof typeof badges] as string | undefined);
	return badge
		? {
				badgeSrc: `https://img.shields.io/badge/${badge.replace(
					/^.*?-/,
					`${name.replace(/-/g, '--')}-`
				)}`,
				badgeAlt: name
			}
		: { badgeSrc: null, badgeAlt: '' };
};

export type ProjectNamesGetter = () => string[];

export const getSites: ProjectNamesGetter = () =>
	getProjectsByType(ProjectType.SITE);
export const getUserscripts: ProjectNamesGetter = () =>
	getProjectsByType(ProjectType.USERSCRIPT);
export const getApps: ProjectNamesGetter = () =>
	getProjectsByType(ProjectType.APP);
export const getPackages: ProjectNamesGetter = () =>
	getProjectsByType(ProjectType.PACKAGE);

export type ProjectsData = {
	type: ProjectType;
	list: ProjectNavItem[];
};

export const getProjectSections = (): ProjectsData[] => {
	const projectTypes = Object.keys(projectIndex).filter(
		(key) => key !== 'index'
	) as ProjectType[];
	const result: ProjectsData[] = [];
	for (const type of projectTypes) {
		const section = projectIndex[type] as Record<string, { badge?: string }>;
		result.push({
			type,
			list: getProjectsByType(type).map((name) => ({
				name,
				...badgeOf(name, section[name]?.badge)
			}))
		});
	}
	return result;
};
