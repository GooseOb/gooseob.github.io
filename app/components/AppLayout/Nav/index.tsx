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
		<nav
			aria-label='Projects'
			className='col-span-1 border-b border-slate-200 bg-secondary-light md:sticky md:top-16 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto md:border-b-0 md:border-r dark:border-zinc-800 dark:bg-secondary-dark'
		>
			<ul className='flex flex-row gap-1 overflow-x-auto p-2 md:flex-col md:overflow-visible'>
				{sections.map(({ type, list }) => (
					<li key={type} className='min-w-[180px] flex-1 md:min-w-0'>
						<Details
							summary={type}
							path={`/${lang}/${type}/`}
							list={list}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
