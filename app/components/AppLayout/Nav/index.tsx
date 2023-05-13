import Details from './Details';
import { Lang } from '@/lib/lang';
import { getProjectSections } from '@/lib/projectNames';
import { FC } from 'react';

type Props = {
	lang: Lang;
};

const Nav: FC<Props> = ({ lang }) => {
	const sections = getProjectSections();

	return (
		<nav className='bg-secondary-light dark:bg-secondary-dark col-span-2 md:col-span-1'>
			<ul>
				{sections.map(({ type, list }) => (
					<Details
						summary={type}
						path={`/${lang}/${type}/`}
						list={list}
						key={type}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
