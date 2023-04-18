import { FC, ReactNode } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { Lang, langObjArr } from '@/lib/lang';
import AppLayout from '@/app/components/AppLayout';

export const generateStaticParams = () => langObjArr;

export interface AppParams extends ParsedUrlQuery {
	lang: Lang;
}

type Props = {
	children: ReactNode;
	params: AppParams;
};

const Layout: FC<Props> = ({ children, params }) => {
	return <AppLayout params={params}>{children}</AppLayout>;
};

export default Layout;
