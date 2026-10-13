const EMAIL = 'edvin.dulko1@gmail.com';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='col-span-1 border-t border-white/10 bg-primary-light text-white md:col-span-2 dark:bg-primary-dark'>
			<ul className='links-color-dark flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-3 text-center text-sm'>
				<li className='text-white/70'>© GooseOb {year}</li>
				<li>
					<a href='https://t.me/GooseOb'>telegram</a>
				</li>
				<li>
					<a href={'mailto:' + EMAIL}>{EMAIL}</a>
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
