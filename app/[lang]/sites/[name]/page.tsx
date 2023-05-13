import { ProjectPage } from '@/lib/projectPage';
import { useSite } from '@/lib/projects';
import IconLink from '@/app/components/IconLink';
import Content from '@/app/components/Content';
import ProjectStack from '@/app/components/ProjectStack';
import GithubIcon from '@/app/components/GithubIcon';
export { generateStaticSiteParams as generateStaticParams } from '@/lib/projectPage';
import LastUpdate from '@/app/components/LastUpdate';

const SitePage: ProjectPage = ({ params }) => {
	const { meta, content } = useSite(params.name, params.lang);

	return (
		<div>
			<div className='relative'>
				<div className='absolute z-10 right-0 bottom-0 bg-neutral-light dark:bg-neutral-dark rounded-tl-2xl p-2 text-3xl md:text-5xl font-medium text-center [&>*]:inline-block'>
					<div className='text-orange-600'>{meta.type}</div>
					<GithubIcon repo={meta.repo} />
					<h1>{meta.name}</h1>
				</div>
				<IconLink
					href={meta.url}
					alt='go to site'
					src={meta.img}
					width={1920}
					imgClassName='mx-auto rounded-2xl min-h-[150px] md:h-[40vh] object-cover object-top object-position-animation'
					linkClassName='opacity-80 hover:opacity-100'
				/>
			</div>
			<Content>{content}</Content>
			<LastUpdate lang={params.lang} date={meta.lastModified} />
			<ProjectStack>{meta.stack}</ProjectStack>
		</div>
	);
};

export default SitePage;
