'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ProjectNavItem } from '@/lib/projectNames';

type Props = { summary: string; path: string; list: ProjectNavItem[] };

const baseItemClassName =
	'block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-hoversecondary-light hover:no-underline dark:hover:bg-hoversecondary-dark';

const Details = ({ summary, path, list }: Props) => {
	const pathname = usePathname();
	const isSectionActive = pathname?.startsWith(path) ?? false;
	const [open, setOpen] = useState(true);

	return (
		<details
			open={open}
			onToggle={(e) => setOpen(e.currentTarget.open)}
			className='group rounded-xl border border-transparent open:border-slate-200 open:bg-white/60 md:open:border-transparent md:open:bg-transparent dark:open:border-zinc-800 dark:md:open:border-transparent dark:md:open:bg-transparent'
		>
			<summary className='flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-500 transition-colors select-none hover:bg-hoversecondary-light hover:text-slate-800 [&::-webkit-details-marker]:hidden dark:text-zinc-400 dark:hover:bg-hoversecondary-dark dark:hover:text-zinc-100'>
				<span className='capitalize'>{summary}</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='h-4 w-4 transition-transform group-open:rotate-90'
					aria-hidden='true'
				>
					<polyline points='9 18 15 12 9 6' />
				</svg>
			</summary>
			<ul className='mt-1 space-y-0.5 pb-2'>
				{list.map(({ name, badgeSrc, badgeAlt }) => {
					const href = path + name;
					const isActive = pathname === href || pathname === href + '/';
					return (
						<li key={name}>
							<Link
								href={href}
								title={name}
								aria-current={isActive ? 'page' : undefined}
								className={
									baseItemClassName +
									(isActive
										? ' border-l-2 border-purple-600 bg-violet-100 font-medium text-purple-900 dark:border-purple-400 dark:bg-purple-900/30 dark:text-purple-100'
										: ' border-l-2 border-transparent text-slate-700 hover:text-slate-950 dark:text-zinc-300 dark:hover:text-white') +
									(isSectionActive && !isActive ? '' : '')
								}
							>
								{badgeSrc ? (
									<img
										src={badgeSrc}
										alt={badgeAlt || name}
										loading='lazy'
										className='inline-block h-[1.4em] max-w-full align-middle'
									/>
								) : (
									<span className='break-words'>{name}</span>
								)}
							</Link>
						</li>
					);
				})}
			</ul>
		</details>
	);
};

export default Details;
