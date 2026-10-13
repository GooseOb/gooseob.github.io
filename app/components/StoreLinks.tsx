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

const StoreLinks = ({ urls }: Props) => (
	<span className='inline-flex flex-wrap items-center gap-3'>
		{urls.map((href) => {
			const hit = storeIcons.find(([re]) => re.test(new URL(href).hostname));
			if (!hit) {
				return (
					<a key={href} className='break-all text-sm' href={href}>
						{href}
					</a>
				);
			}
			const [, src, alt, darkSrc] = hit;
			return darkSrc ? (
				<span className='contents' key={href}>
					<IconLink
						href={href}
						src={darkSrc}
						alt={alt}
						className='hidden dark:inline-flex'
					/>
					<IconLink
						href={href}
						src={src}
						alt={alt}
						className='inline-flex dark:hidden'
					/>
				</span>
			) : (
				<IconLink key={href} href={href} src={src} alt={alt} />
			);
		})}
	</span>
);

export default StoreLinks;
