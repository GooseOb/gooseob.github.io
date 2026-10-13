import { FC } from 'react';
import IconLink from '@/app/components/IconLink';

type Props = { repo: string };

const GithubIcon: FC<Props> = ({ repo }) => {
	const commonProps = { href: repo, alt: 'github repo' };

	return (
		<span className='inline-flex items-center'>
			<IconLink
				{...commonProps}
				className='hidden dark:inline-flex'
				src='/assets/github-mark-white.svg'
			/>
			<IconLink
				{...commonProps}
				className='inline-flex dark:hidden'
				src='/assets/github-mark.svg'
			/>
		</span>
	);
};

export default GithubIcon;
