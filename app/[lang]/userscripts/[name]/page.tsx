import { ProjectPage } from '@/lib/projectPage';
import { useUserscript } from '@/lib/projects';
import IconLink from '@/app/components/IconLink';
import Content from '@/app/components/Content';
import GithubIcon from '@/app/components/GithubIcon';
import ProjectStack from '@/app/components/ProjectStack';
export { generateStaticUserscriptParams as generateStaticParams } from '@/lib/projectPage';

const UserscriptPage: ProjectPage = ({ params }) => {
	const { meta, content } = useUserscript(params.name, params.lang);
	return (
		<div>
			<div className='mb-5 text-5xl font-medium text-center [&>*]:inline-block'>
				<GithubIcon repo={meta.repo} />
				<h1>{meta.name}</h1>
				{meta.url && (
					<IconLink
						href={meta.url}
						alt='go to greasyfork'
						src='/assets/greasyfork.png'
					/>
				)}
			</div>
			<Content>{content}</Content>
			{meta.stack && <ProjectStack>{meta.stack}</ProjectStack>}
		</div>
	);
};

export default UserscriptPage;
