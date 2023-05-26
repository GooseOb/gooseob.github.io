import { FC } from 'react';
import { Lang, langText } from '@/lib/lang';
import LanguageSelectClient from '@/app/components/LanguageSelect/client';

type Props = {
	value: Lang;
};

const options = langText.map(([value, text]) => (
	<option value={value} key={value}>
		{text}
	</option>
));

const LanguageSelect: FC<Props> = ({ value }) => (
	<div className='my-auto mx-4'>
		<LanguageSelectClient value={value} options={options} />
	</div>
);

export default LanguageSelect;
