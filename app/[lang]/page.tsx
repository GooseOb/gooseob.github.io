import { NextPage } from 'next';
import { AppParams } from '@/app/[lang]/layout';
import useHome from '@/lib/useHome';
import Content from '@/app/components/Content';
import ProjectStack from '@/app/components/ProjectStack';

type Props = {
	params: AppParams;
};

const Home: NextPage<Props> = ({ params }) => {
	const { content, meta } = useHome(params.lang);
	return (
		<>
			<Content markdownStyleClassName='content-from-markdown-home'>
				{content}
			</Content>
			<ProjectStack>{meta.stack}</ProjectStack>
		</>
	);
};

export default Home;
