import { FC } from 'react';
import IconLink from '@/app/components/IconLink';

type Props = {
	repo: string;
};

const GithubIcon: FC<Props> = ({ repo }) => {
	const commonProps = {
		href: repo,
		alt: 'github repo'
	};

	return (
		<div className='mx-3'>
			<IconLink
				{...commonProps}
				className='hidden dark:inline-block'
				src='/assets/github-mark-white.svg'
			/>
			<IconLink
				{...commonProps}
				className='inline-block dark:hidden'
				src='/assets/github-mark.svg'
			/>
		</div>
	);
};

export default GithubIcon;
