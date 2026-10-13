import { ReactNode } from 'react';
import Image from 'next/image';
import GithubIcon from '@/app/components/GithubIcon';

type Props = {
	type?: string;
	name: string;
	repo: string;
	actions?: ReactNode;
	img?: string;
	imgLinkHref?: string;
};

const ProjectHero = ({
	type,
	name,
	repo,
	actions,
	img,
	imgLinkHref
}: Props) => {
	const heroImage = img ? (
		<Image
			src={img}
			className='h-full w-full object-cover object-top motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]'
			alt={`${name} screenshot`}
			width={1280}
			height={720}
			priority
		/>
	) : null;

	return (
		<div className='mb-6'>
			<div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
				{type && (
					<span className='rounded-full bg-orange-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-950 dark:bg-orange-800/60 dark:text-orange-100'>
						{type}
					</span>
				)}
				<h1 className='text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white'>
					{name}
				</h1>
				<span className='ml-auto flex items-center gap-3'>
					<GithubIcon repo={repo} />
					{actions}
				</span>
			</div>
			{heroImage &&
				(imgLinkHref ? (
					<a
						href={imgLinkHref}
						className='group mt-6 block overflow-hidden rounded-3xl border border-slate-200 no-underline shadow-lg outline-offset-4 dark:border-zinc-700'
						aria-label={`Open ${name} site`}
					>
						<span className='relative block aspect-video w-full overflow-hidden'>
							{heroImage}
							<span
								aria-hidden='true'
								className='absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100'
							/>
							<span
								aria-hidden='true'
								className='absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-purple-900 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 dark:bg-zinc-900 dark:text-purple-100'
							>
								Open live site ↗
							</span>
						</span>
					</a>
				) : (
					<figure className='mt-6 overflow-hidden rounded-3xl border border-slate-200 shadow-lg dark:border-zinc-700'>
						<span className='block aspect-video w-full overflow-hidden'>
							{heroImage}
						</span>
					</figure>
				))}
		</div>
	);
};

export default ProjectHero;
