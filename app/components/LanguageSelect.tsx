'use client';
import { ChangeEvent, FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Lang, langText } from '@/lib/lang';

type Props = {
	value: Lang;
};

const LanguageSelect: FC<Props> = ({ value }) => {
	const router = useRouter();
	const pathname = usePathname();

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newPath =
			`/${e.target.value}/` + (pathname ? pathname.replace(/^\/..\//, '') : '');
		router.replace(newPath);
	};

	return (
		<div className='my-auto mx-4'>
			<select
				defaultValue={value}
				onChange={onChange}
				className='rounded-xl p-2 duration-300 bg-secondary-light dark:bg-secondary-dark hover:bg-hoversecondary-light dark:hover:bg-hoversecondary-dark'
			>
				{langText.map(([value, text]) => (
					<option value={value} key={value}>
						{text}
					</option>
				))}
			</select>
		</div>
	);
};

export default LanguageSelect;
