import { FC } from 'react';
import { Lang } from '@/lib/lang';
import dict from '@/content/dict.json';

type Props = { lang: Lang; date: Date };

const LatestUpdate: FC<Props> = ({ lang, date }) => (
	<p className='mb-4 text-sm text-slate-500 dark:text-zinc-400'>
		{dict[lang].latestUpdate}: {date.toLocaleString(lang)}
	</p>
);

export default LatestUpdate;
