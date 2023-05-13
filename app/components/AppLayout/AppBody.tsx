import { FC, ReactNode } from 'react';
import { AppParams } from '@/app/[lang]/layout';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Lang } from '@/lib/lang';

type Props = {
	children: ReactNode;
	params: AppParams;
};

const AppBody: FC<Props> = ({ children, params: { lang } }) => {
	const homeHref: `/${Lang}/` = `/${lang}/`;

	return (
		<body className='h-max md:h-screen grid grid-cols-[1fr] md:grid-cols-[1fr_4fr] grid-rows-[auto] md:grid-rows-[2fr_20fr_1fr] bg-primary-light dark:bg-primary-dark'>
			<Header lang={lang} homeHref={homeHref} />
			<Nav lang={lang} />
			<main className='overflow-auto bg-neutral-light dark:bg-neutral-dark p-5 col-span-2 md:col-span-1'>
				{children}
			</main>
			<Footer />
		</body>
	);
};

export default AppBody;
