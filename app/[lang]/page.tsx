import { NextPage } from 'next';
import { AppParams } from '@/app/[lang]/layout';
import { useHome } from '@/lib/projects';
import Content from '@/app/components/Content';
import ProjectStack from '@/app/components/ProjectStack';
import LastUpdate from '@/app/components/LastUpdate';

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
			<LastUpdate lang={params.lang} date={new Date()} />
			<ProjectStack>{meta.stack}</ProjectStack>
		</>
	);
};

export default Home;
