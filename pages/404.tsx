import { NextPage } from 'next';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const NotFound: NextPage = () => {
	return (
		<div className='h-full flex flex-col items-center mt-40 text-5xl font-medium'>
			<Image src='/icon.svg' alt='logo' className='w-[4em] mb-[1em]' />
			<div>404</div>
			<div className='mb-[1em]'>Page not found</div>
			<Link href='/'>Home page</Link>
		</div>
	);
};

export default NotFound;
