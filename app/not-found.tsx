import { NextPage } from 'next';
import AppBody from '@/app/components/AppLayout/AppBody';
import defaultParams from '@/lib/defaultParams';

const NotFound: NextPage = () => {
	return (
		<AppBody params={defaultParams}>
			<div className='h-full my-40 text-center text-5xl font-medium'>
				<div>404</div>
				<div>Page not found</div>
			</div>
		</AppBody>
	);
};

export default NotFound;
