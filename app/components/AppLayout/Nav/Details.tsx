import { FC } from 'react';
import Link from 'next/link';

export const navItemClassName =
	'py-2 pl-6 pr-3 cursor-pointer hover:bg-hoversecondary-light dark:hover:bg-hoversecondary-dark';

type Props = {
	summary: string;
	path: string;
	list: string[];
};

const Details: FC<Props> = ({ summary, path, list }) => (
	<>
		<details className='cursor-pointer' open>
			<summary className='py-2 pl-3 select-none hover:bg-hoversecondary-light dark:hover:bg-hoversecondary-dark'>
				{summary}
			</summary>
			{list.map((name) => (
				<Link href={path + name} key={name}>
					<li className={navItemClassName}>{name}</li>
				</Link>
			))}
		</details>
		<hr />
	</>
);

export default Details;
