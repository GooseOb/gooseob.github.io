import { FC } from 'react';
import IconLink from './IconLink';

const storeIcons: [RegExp, string, string, string?][] = [
	[/npmjs\.com$/, '/assets/npm.svg', 'go to npm'],
	[
		/crates\.io$/,
		'/assets/rust.svg',
		'go to crates.io',
		'/assets/rust-white.svg'
	],
	[/greasyfork\.org$/, '/assets/greasyfork.png', 'go to greasyfork'],
	[
		/github\.com$/,
		'/assets/github-mark.svg',
		'go to github',
		'/assets/github-mark-white.svg'
	],
	[/gooseob\.github\.io$/, '/icon.svg', 'go to the site']
];

type Props = { urls: string[] };

const StoreLinks: FC<Props> = ({ urls }) => (
	<>
		{urls.map((href) => {
			const hit = storeIcons.find(([re]) => re.test(new URL(href).hostname));
			if (!hit) {
				return (
					<a key={href} className='underline mx-3' href={href}>
						{href}
					</a>
				);
			}
			const [, src, alt, darkSrc] = hit;
			return darkSrc ? (
				<div className='contents mx-1' key={href}>
					<IconLink
						href={href}
						src={darkSrc}
						alt={alt}
						className='hidden dark:inline-block'
					/>
					<IconLink
						href={href}
						src={src}
						alt={alt}
						className='inline-block dark:hidden'
					/>
				</div>
			) : (
				<IconLink key={href} href={href} src={src} alt={alt} />
			);
		})}
	</>
);

export default StoreLinks;
