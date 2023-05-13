import { FC } from 'react';
import { Lang } from '@/lib/lang';
import dict from '@/content/dict.json';

type Props = {
	lang: Lang;
	date: Date;
};

const LastUpdate: FC<Props> = ({ lang, date }) => {
	return (
		<div className='md:mx-20'>
			{dict[lang].lastUpdate}: {date.toLocaleString(lang)}
		</div>
	);
};

export default LastUpdate;
