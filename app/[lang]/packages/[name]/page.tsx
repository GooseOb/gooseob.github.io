import { ProjectPage } from '@/lib/projectPage';
import { usePackage } from '@/lib/projects';
import Content from '@/app/components/Content';
import ProjectStack from '@/app/components/ProjectStack';
import ProjectHero from '@/app/components/ProjectHero';
import StoreLinks from '@/app/components/StoreLinks';
export { generateStaticPackageParams as generateStaticParams } from '@/lib/projectPage';

const PackagePage: ProjectPage = ({ params }) => {
	const { meta, content } = usePackage(params.name, params.lang);
	return (
		<div>
			<ProjectHero
				type={meta.type}
				name={meta.name}
				repo={meta.repo}
				actions={meta.urls && <StoreLinks urls={meta.urls} />}
			/>
			<Content>{content}</Content>
			{meta.stack && <ProjectStack>{meta.stack}</ProjectStack>}
		</div>
	);
};

export default PackagePage;
