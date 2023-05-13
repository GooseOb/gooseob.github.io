import { FC } from 'react';

const Favicons: FC = () => {
	return (
		<>
			<link rel='icon' href='/icon.svg' type='image/svg+xml' />
			<link rel='mask-icon' href='/icon-nobg.svg' color='#000' />
		</>
	);
};

export default Favicons;
