import { FC, ReactNode } from 'react';
import { useProjects } from '@/lib/projectNames';
import { AppParams } from '@/app/[lang]/layout';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

type Props = {
	children: ReactNode;
	params?: AppParams;
};

const AppBody: FC<Props> = ({ children, params }) => {
	const lang = params ? params.lang : 'en';
	const homeHref = `/${lang}/`;

	const sections = useProjects(lang);

	return (
		<body className='h-max md:h-screen grid grid-cols-[1fr] md:grid-cols-[1fr_4fr] grid-rows-[auto] md:grid-rows-[2fr_20fr_1fr] bg-primary-light dark:bg-primary-dark'>
			<Header lang={lang} homeHref={homeHref} />
			<Nav lang={lang} sections={sections} />
			<main className='overflow-auto bg-neutral-light dark:bg-neutral-dark p-5 col-span-2 md:col-span-1'>
				{children}
			</main>
			<Footer email='edvin.dulko1@gmail.com' />
		</body>
	);
};

export default AppBody;
