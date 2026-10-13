import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type IconLinkProps = {
	href: string;
	src: string;
	alt: string;
	internal?: boolean;
	className?: string;
	linkClassName?: string;
	imgClassName?: string;
	width?: number;
	height?: number;
};

const IconLink: FC<IconLinkProps> = ({
	href,
	src,
	alt,
	internal = false,
	className = 'inline-flex',
	linkClassName = 'inline-flex rounded-lg opacity-70 transition-opacity hover:opacity-100 select-none',
	imgClassName = 'h-[1.5em] w-[1.5em]',
	width = 100,
	height = width
}) => (
	<div className={className}>
		{React.createElement(
			internal ? Link : 'a',
			{ className: linkClassName, href },
			<Image
				src={src}
				className={imgClassName}
				width={width}
				height={height}
				alt={alt}
			/>
		)}
	</div>
);

export default IconLink;
