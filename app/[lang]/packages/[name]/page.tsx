import { ProjectPage } from '@/lib/projectPage';
import { usePackage } from '@/lib/projects';
import Content from '@/app/components/Content';
import GithubIcon from '@/app/components/GithubIcon';
import ProjectStack from '@/app/components/ProjectStack';
import StoreLinks from '@/app/components/StoreLinks';
export { generateStaticPackageParams as generateStaticParams } from '@/lib/projectPage';

const PackagePage: ProjectPage = ({ params }) => {
	const { meta, content } = usePackage(params.name, params.lang);
	return (
		<div>
			<div className='mb-5 text-5xl font-medium text-center [&>*]:inline-block'>
				<div className='text-orange-600'>{meta.type}</div>
				<GithubIcon repo={meta.repo} />
				<h1>{meta.name}</h1>
				{meta.urls && <StoreLinks urls={meta.urls} />}
			</div>
			<Content>{content}</Content>
			{meta.stack && <ProjectStack>{meta.stack}</ProjectStack>}
		</div>
	);
};

export default PackagePage;
