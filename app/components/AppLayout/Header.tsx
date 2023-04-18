import React, { FC } from 'react';
import Link from 'next/link';
import LanguageSelect from '@/app/components/LanguageSelect';
import { Lang } from '@/lib/lang';

type Props = {
	homeHref: string;
	lang: Lang;
};

const svgClassName =
	'fill-white dark:fill-white hover:fill-hoverlink-light dark:hover:fill-hoverlink-dark';

const Header: FC<Props> = ({ homeHref, lang }) => {
	return (
		<header className='p-3 flex h-[100%] col-span-2 shadow-[#0006] shadow-2xl z-10'>
			<h1 className='mx-auto md:ml-32 my-auto text-2xl md:text-3xl font-medium select-none'>
				<Link
					href={homeHref}
					className={'flex items-center gap-3 text-white ' + svgClassName}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 32 32'
						className='w-[2em] h-[2em]'
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
					<span>GooseOb’s pages</span>
				</Link>
			</h1>
			<LanguageSelect value={lang} />
		</header>
	);
};

export default Header;
