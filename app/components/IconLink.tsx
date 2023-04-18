import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type IconLinkProps = {
	href: string;
	src: string;
	alt: string;
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
	className = 'mx-3',
	linkClassName = 'opacity-70 hover:opacity-100 select-none',
	imgClassName = 'h-[1em] w-[1em]',
	width = 100,
	height = width!
}) => (
	<div className={className}>
		<Link className={linkClassName} href={href} as={as}>
			<Image
				src={src}
				className={imgClassName}
				width={width}
				height={height}
				alt={alt}
			/>
		</Link>
	</div>
);

export default IconLink;
