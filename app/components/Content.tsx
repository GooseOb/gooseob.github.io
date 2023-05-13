import { FC } from 'react';

type Props = {
	children: string;
	markdownStyleClassName?: string;
};

const Content: FC<Props> = ({ children, markdownStyleClassName = '' }) => {
	return (
		<div
			className={
				'my-3 md:mx-20 content-from-markdown ' + markdownStyleClassName
			}
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
};

export default Content;
