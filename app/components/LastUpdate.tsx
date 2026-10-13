import { Lang } from '@/lib/lang';
import dict from '@/content/dict.json';

type Props = { lang: Lang; date: Date };

const LatestUpdate = ({ lang, date }: Props) => (
	<p className='mb-4 text-sm text-slate-500 dark:text-zinc-400'>
		{dict[lang].latestUpdate}: {date.toLocaleString(lang)}
	</p>
);

export default LatestUpdate;
