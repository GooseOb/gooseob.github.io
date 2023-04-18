import React, { FC } from 'react';
import Details from './Details';
import { Lang } from '@/lib/lang';

type Section = {
	name: string;
	list: string[];
};

type Props = {
	lang: Lang;
	sections: Section[];
};

const Index: FC<Props> = ({ lang, sections }) => {
	return (
		<nav className='bg-secondary-light dark:bg-secondary-dark col-span-2 md:col-span-1'>
			<ul>
				{sections.map(({ name, list }) => (
					<Details
						summary={name}
						path={`/${lang}/${name}/`}
						list={list}
						key={name}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Index;
