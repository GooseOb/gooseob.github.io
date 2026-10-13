type Props = {
	children: string;
	markdownStyleClassName?: string;
};

const Content = ({ children, markdownStyleClassName = '' }: Props) => {
	return (
		<div
			className={
				'w-full content-from-markdown ' + markdownStyleClassName
			}
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
};

export default Content;
