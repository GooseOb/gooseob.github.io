import { NextPage } from 'next';
import AppLayout from '@/app/components/AppLayout';
import Home from '@/app/[lang]/page';
import { AppParams } from '@/app/[lang]/layout';

const defaultParams: AppParams = { lang: 'en' };

const RootHome: NextPage = () => {
	return (
		<AppLayout params={defaultParams}>
			<Home params={defaultParams} />
		</AppLayout>
	);
};

export default RootHome;
