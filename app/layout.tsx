import { FC, ReactElement, ReactNode } from 'react';
import './globals.css';

type Props = {
	children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
	return children as ReactElement;
};

export default Layout;
