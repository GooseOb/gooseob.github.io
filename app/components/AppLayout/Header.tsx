import { FC } from 'react';
import Link from 'next/link';
import LanguageSelect from '@/app/components/LanguageSelect';
import ThemeToggle from '@/app/components/ThemeToggle';
import { Lang } from '@/lib/lang';

type Props = {
	homeHref: string;
	lang: Lang;
};

const Header: FC<Props> = ({ homeHref, lang }) => {
	return (
		<header className='sticky top-0 z-20 col-span-1 flex h-16 items-center gap-3 border-b border-white/10 bg-primary-light px-4 shadow-lg md:col-span-2 md:px-6 dark:bg-primary-dark'>
			<h1 className='text-xl font-semibold tracking-tight select-none md:text-2xl'>
				<Link
					href={homeHref}
					className='flex items-center gap-3 rounded-lg fill-white text-white no-underline transition-colors hover:fill-purple-200 hover:text-purple-200'
					aria-label="Go to homepage — GooseOb's pages"
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 32 32'
						className='h-9 w-9 shrink-0'
						aria-hidden='true'
					>
						<style>
							{
								'.cls-2,.cls-3{fill:none;stroke:#000;}.cls-2{stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}.cls-3{stroke-linejoin:round;stroke-width:2px}'
							}
						</style>
						<circle className='cls-1' cx='16' cy='16' r='16' />
						<path className='cls-2' d='M18,3c-5,1.25-4,7-4,7l4,18' />
						<polyline className='cls-3' points='16.5 22 5 20 14.5 12.5' />
						<circle style={{ fill: 'black' }} cx='21' cy='10' r='2' />
					</svg>
					<span>GooseObʼs pages</span>
				</Link>
			</h1>
			<div className='ml-auto flex items-center gap-2'>
				<LanguageSelect value={lang} />
				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
