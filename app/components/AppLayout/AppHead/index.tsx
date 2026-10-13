import { FC } from 'react';
import Favicons from './Favicons';

const Index: FC = () => {
	return (
		<head>
			<Favicons />
			<title>GooseObʼs pages</title>
			<meta name='color-scheme' content='light dark' />
			<script
				dangerouslySetInnerHTML={{
					__html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`
				}}
			/>
		</head>
	);
};

export default Index;
