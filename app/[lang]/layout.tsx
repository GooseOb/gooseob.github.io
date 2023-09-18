export { default } from '@/app/components/AppLayout';
export { getLangObjArr as generateStaticParams } from '@/lib/lang';

import { Lang } from '@/lib/lang';
import { ParsedUrlQuery } from 'querystring';

export interface AppParams extends ParsedUrlQuery {
	lang: Lang;
}
