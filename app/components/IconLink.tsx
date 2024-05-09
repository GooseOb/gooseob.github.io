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
	className = 'mx-3',
	linkClassName = 'opacity-70 hover:opacity-100 select-none',
	imgClassName = 'h-[1em] w-[1em]',
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
