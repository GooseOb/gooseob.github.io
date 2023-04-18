import { FC } from 'react';

type Props = {
	email: string;
};

const Footer: FC<Props> = ({ email }) => {
	return (
		<footer className='p-1 col-span-2 m-auto text-white links-color-dark'>
			<ul className='[&>li]:inline-block [&>li]:ml-2 text-center'>
				<li>(c) GooseOb 2023</li>
				<li>
					<a href='https://t.me/GooseOb'>telergram</a>
				</li>
				<li>
					<a href={'mailto:' + email}>{email}</a>
				</li>
				<li>
					<a href='https://github.com/GooseOb'>github</a>
				</li>
				<li>
					<a href='https://greasyfork.org/en/users/901750-gooseob'>
						greasyfork
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
