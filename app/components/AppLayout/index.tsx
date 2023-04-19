import React, { FC, ReactNode } from 'react';
import AppHead from './AppHead';
import AppBody from './AppBody';
import { AppParams } from '@/app/[lang]/layout';

type Props = {
	params: AppParams;
	children: ReactNode;
};

const AppLayout: FC<Props> = ({ params, children }) => {
	return (
		<html lang={params.lang}>
			<AppHead />
			<AppBody params={params}>{children}</AppBody>
		</html>
	);
};

export default AppLayout;
