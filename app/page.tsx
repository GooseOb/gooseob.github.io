import { NextPage } from 'next';
import AppLayout from '@/app/components/AppLayout';
import Home from '@/app/[lang]/page';
import defaultParams from '@/lib/defaultParams';

const RootHome: NextPage = () => {
	return (
		<AppLayout params={defaultParams}>
			<Home params={defaultParams} />
		</AppLayout>
	);
};

export default RootHome;
