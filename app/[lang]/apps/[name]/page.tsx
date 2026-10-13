import { ProjectPage } from '@/lib/projectPage';
import { useApp } from '@/lib/projects';
import Content from '@/app/components/Content';
import GithubIcon from '@/app/components/GithubIcon';
import ProjectStack from '@/app/components/ProjectStack';
import StoreLinks from '@/app/components/StoreLinks';
export { generateStaticAppParams as generateStaticParams } from '@/lib/projectPage';
import Image from 'next/image';

const imgClassName =
	'mx-auto rounded-2xl min-h-[150px] md:h-[40vh] object-cover object-top object-position-animation';

const AppPage: ProjectPage = ({ params }) => {
	const { meta, content } = useApp(params.name, params.lang);
	return (
		<div>
			<div className='relative'>
				<div className='absolute z-10 gap-1 right-0 bottom-0 bg-neutral-light dark:bg-neutral-dark rounded-tl-2xl p-2 text-3xl md:text-5xl font-medium text-center [&>*]:inline-block'>
					<div className='text-orange-600'>{meta.type}</div>
					<GithubIcon repo={meta.repo} />
					<h1>{meta.name}</h1>
					{meta.urls && <StoreLinks urls={meta.urls} />}
				</div>
				{meta.img && (
					<Image
						src={meta.img}
						className={imgClassName}
						alt={''}
						width={1920}
						height={1920}
					/>
				)}
			</div>
			<Content>{content}</Content>
			{meta.stack && <ProjectStack>{meta.stack}</ProjectStack>}
		</div>
	);
};

export default AppPage;
