import React, { FC } from 'react';

type Props = {
	children: string;
	markdownStyleClassName?: string;
};

const Content: FC<Props> = ({
	children,
	markdownStyleClassName = 'content-from-markdown'
}) => {
	return (
		<div
			className={'my-3 md:mx-20 ' + markdownStyleClassName}
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
};

export default Content;
