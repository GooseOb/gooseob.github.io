'use client';
import { ChangeEvent, FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Lang } from '@/lib/lang';

type Props = {
	value: Lang;
	options: any[];
};

const LanguageSelectClient: FC<Props> = ({ value, options }) => {
	const router = useRouter();
	const pathname = usePathname();

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const langPath = `/${e.target.value}/`;
		const newPath = pathname?.replace(/^\/..\//, langPath) || langPath;
		router.replace(newPath);
	};

	return (
		<select
			defaultValue={value}
			onChange={onChange}
			className='rounded-xl p-2 duration-300 bg-secondary-light dark:bg-secondary-dark hover:bg-hoversecondary-light dark:hover:bg-hoversecondary-dark'
		>
			{options}
		</select>
	);
};

export default LanguageSelectClient;
