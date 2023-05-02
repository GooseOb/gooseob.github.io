import '@/app/globals.css';
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Favicons from '@/app/components/AppLayout/AppHead/Favicons';

const NotFound: NextPage = () => {
	return (
		<>
			<Head>
				<Favicons />
				<title>not found</title>
			</Head>
			<div className='h-full flex flex-col items-center mt-20 md:mt-40 text-5xl text-center font-medium'>
				<Image src='/icon.svg' alt='logo' className='w-[4em] mb-[1em]' />
				<div>404</div>
				<div className='mb-[1em]'>Goose hasn’t created this page yet</div>
				<Link href='/'>Home page</Link>
			</div>
		</>
	);
};

export default NotFound;
