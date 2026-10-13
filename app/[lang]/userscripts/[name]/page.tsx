import { ProjectPage } from '@/lib/projectPage';
import { useUserscript } from '@/lib/projects';
import IconLink from '@/app/components/IconLink';
import Content from '@/app/components/Content';
import ProjectStack from '@/app/components/ProjectStack';
import ProjectHero from '@/app/components/ProjectHero';
export { generateStaticUserscriptParams as generateStaticParams } from '@/lib/projectPage';

const UserscriptPage: ProjectPage = ({ params }) => {
	const { meta, content } = useUserscript(params.name, params.lang);
	return (
		<div>
			<ProjectHero
				name={meta.name}
				repo={meta.repo}
				actions={
					meta.url && (
						<IconLink
							href={meta.url}
							alt='go to greasyfork'
							src='/assets/greasyfork.png'
						/>
					)
				}
			/>
			<Content>{content}</Content>
			{meta.stack && <ProjectStack>{meta.stack}</ProjectStack>}
		</div>
	);
};

export default UserscriptPage;
