import { ProjectPage } from '@/lib/projectPage';
import { useApp } from '@/lib/projects';
import Content from '@/app/components/Content';
import ProjectStack from '@/app/components/ProjectStack';
import ProjectHero from '@/app/components/ProjectHero';
import StoreLinks from '@/app/components/StoreLinks';
export { generateStaticAppParams as generateStaticParams } from '@/lib/projectPage';

const AppPage: ProjectPage = ({ params }) => {
	const { meta, content } = useApp(params.name, params.lang);
	return (
		<div>
			<ProjectHero
				type={meta.type}
				name={meta.name}
				repo={meta.repo}
				img={meta.img}
				actions={meta.urls && <StoreLinks urls={meta.urls} />}
			/>
			<Content>{content}</Content>
			{meta.stack && <ProjectStack>{meta.stack}</ProjectStack>}
		</div>
	);
};

export default AppPage;
