import { ProjectPage } from '@/lib/projectPage';
import { useUserscript } from '@/lib/projects';
import IconLink from '@/app/components/IconLink';
import Content from '@/app/components/Content';
import GithubIcon from '@/app/components/GithubIcon';
export { generateStaticUserscriptParams as generateStaticParams } from '@/lib/projectPage';

const UserscriptPage: ProjectPage = ({ params }) => {
	const { meta, content } = useUserscript(params.name, params.lang);
	return (
		<div>
			<div className='mb-5 text-5xl font-medium text-center [&>*]:inline-block'>
				{meta.url && (
					<IconLink
						href={meta.url}
						alt='go to greasyfork'
						src='/greasyfork.png'
					/>
				)}
				<h1>{meta.name}</h1>
				<GithubIcon repo={meta.repo} />
			</div>
			<Content>{content}</Content>
		</div>
	);
};

export default UserscriptPage;
