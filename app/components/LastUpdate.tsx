import { FC } from 'react';
import { Lang } from '@/lib/lang';
import dict from '@/content/dict.json';

type Props = {
	lang: Lang;
	date: Date;
};

const LatestUpdate: FC<Props> = ({ lang, date }) => (
	<div className='md:mx-20'>
		{dict[lang].latestUpdate}: {date.toLocaleString(lang)}
	</div>
);

export default LatestUpdate;
