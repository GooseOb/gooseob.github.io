import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import internal from 'stream';

type IconLinkProps = {
	href: string;
	src: string;
	alt: string;
	internal?: boolean;
	as?: string;
	className?: string;
	linkClassName?: string;
	imgClassName?: string;
	width?: number;
	height?: number;
};

const IconLink: FC<IconLinkProps> = ({
	href,
	as = href,
	src,
	alt,
	internal = false,
	className = 'mx-3',
	linkClassName = 'opacity-70 hover:opacity-100 select-none',
	imgClassName = 'h-[1em] w-[1em]',
	width = 100,
	height = width!
}) => {
	const img = (
		<Image
			src={src}
			className={imgClassName}
			width={width}
			height={height}
			alt={alt}
		/>
	);
	return (
		<div className={className}>
			{internal ? (
				<Link className={linkClassName} href={href} as={as}>
					{img}
				</Link>
			) : (
				<a className={linkClassName} href={href}>
					{img}
				</a>
			)}
		</div>
	);
};

export default IconLink;
