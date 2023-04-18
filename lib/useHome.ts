import { use } from 'react';
import { DataFromMd, htmlFromMd } from '@/lib/markdownProcessor';
import { Lang } from '@/lib/lang';

type HomeMetaData = {
	stack: string;
};

const useHome = (lang: Lang) =>
	use(htmlFromMd<DataFromMd<HomeMetaData>>([lang, 'index']));

export default useHome;
