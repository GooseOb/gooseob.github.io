import { ProjectPage } from '@/lib/projectPage';
import { useSite } from '@/lib/projects';
import Content from '@/app/components/Content';
import ProjectStack from '@/app/components/ProjectStack';
import ProjectHero from '@/app/components/ProjectHero';
export { generateStaticSiteParams as generateStaticParams } from '@/lib/projectPage';

const SitePage: ProjectPage = ({ params }) => {
	const { meta, content } = useSite(params.name, params.lang);

	return (
		<div>
			<ProjectHero
				type={meta.type}
				name={meta.name}
				repo={meta.repo}
				img={meta.img}
				imgLinkHref={meta.url}
			/>
			<Content>{content}</Content>
			<ProjectStack>{meta.stack}</ProjectStack>
		</div>
	);
};

export default SitePage;
