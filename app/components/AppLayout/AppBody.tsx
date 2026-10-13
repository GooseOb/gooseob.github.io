import { ReactNode } from 'react';
import { AppParams } from '@/app/[lang]/layout';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Lang } from '@/lib/lang';

type Props = {
	children: ReactNode;
	params: AppParams;
};

	const AppBody = ({ children, params: { lang } }: Props) => {
	const homeHref: `/${Lang}/` = `/${lang}/`;

	return (
		<body className='grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-neutral-light text-slate-900 antialiased md:grid-cols-[280px_1fr] dark:bg-neutral-dark dark:text-zinc-100'>
			<a href='#main' className='skip-link'>
				Skip to content
			</a>
			<Header lang={lang} homeHref={homeHref} />
			<Nav lang={lang} />
			<main
				id='main'
				className='min-w-0 bg-neutral-light px-4 py-6 sm:px-6 md:col-start-2 md:px-10 md:py-8 dark:bg-neutral-dark'
			>
				<div className='mx-auto w-full max-w-4xl'>{children}</div>
			</main>
			<Footer />
		</body>
	);
};

export default AppBody;
