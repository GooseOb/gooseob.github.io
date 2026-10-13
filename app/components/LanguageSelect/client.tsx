'use client';
import { ChangeEvent, FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Lang } from '@/lib/lang';

type Props = {
	value: Lang;
	options: JSX.Element[];
};

const LanguageSelectClient: FC<Props> = ({ value, options }) => {
	const router = useRouter();
	const pathname = usePathname();

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const langPath = `/${e.target.value}/`;
		const newPath = pathname?.replace(/^\/..\/|^\/$/, langPath) || langPath;
		router.replace(newPath);
	};

	return (
		<select
			defaultValue={value}
			onChange={onChange}
			aria-label='Language'
			className='rounded-lg border border-white/20 bg-white/10 px-2 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/20 [&>option]:bg-white [&>option]:text-slate-900 dark:[&>option]:bg-zinc-900 dark:[&>option]:text-zinc-100'
		>
			{options}
		</select>
	);
};

export default LanguageSelectClient;
