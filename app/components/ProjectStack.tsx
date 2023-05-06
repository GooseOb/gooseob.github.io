import React, { FC } from 'react';
import { replaceStackKeywordsByBadges } from '@/lib/replaceKeywordsByBadges';

type Props = {
	children: string;
};

const ProjectStack: FC<Props> = ({ children }) => {
	return (
		<div className='relative md:mx-20 p-2 bg-secondary-dark text-white'>
			<div className='absolute top-2 right-2 text-gray-400 font-medium'>
				Stack
			</div>
			<div
				className='project-stack'
				dangerouslySetInnerHTML={{
					__html: replaceStackKeywordsByBadges(children)
				}}
			/>
		</div>
	);
};

export default ProjectStack;
