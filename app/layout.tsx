import { ReactElement, ReactNode } from 'react';
import './globals.css';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return children as ReactElement;
};

export default Layout;
