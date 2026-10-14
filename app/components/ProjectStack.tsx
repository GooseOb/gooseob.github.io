import React from 'react';
import { replaceStackKeywordsByBadges } from '@/lib/replaceKeywordsByBadges';

type Props = { children: string };

const ProjectStack = ({ children }: Props) => {
	return (
		<section
			aria-label='Technology stack'
			className='relative mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100'
		>
			<div className='absolute top-3 right-4 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-zinc-500'>
				Stack
			</div>
			<div
				className='project-stack'
				dangerouslySetInnerHTML={{
					__html: replaceStackKeywordsByBadges(children)
				}}
			/>
		</section>
	);
};

export default ProjectStack;
