'use client';
import { useEffect, useState } from 'react';

const getInitialTheme = () =>
	document?.documentElement.classList.contains('dark') ? 'dark' : 'light';

const ThemeToggle = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		setTheme(getInitialTheme());
	}, []);

	const next = theme === 'dark' ? 'light' : 'dark';
	const isDark = next === 'dark';

	const toggle = () => {
		setTheme(next);
		localStorage.setItem('theme', next);
		document.documentElement.classList.toggle('dark', isDark);
	};

	return (
		<button
			type='button'
			onClick={toggle}
			title={`Switch to ${next} mode`}
			className='rounded-lg border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-5 w-5'
				aria-hidden='true'
			>
				{isDark ? (
					<>
						<circle cx='12' cy='12' r='4' />
						<path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' />
					</>
				) : (
					<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
				)}
			</svg>
		</button>
	);
};

export default ThemeToggle;
