import { use } from 'react';
import { htmlFromMd } from '@/lib/markdownProcessor';
import { Lang } from '@/lib/lang';
import { SiteMetaData } from '@/lib/projects';

export const useHome = (lang: Lang) =>
	use(htmlFromMd<SiteMetaData>([lang, 'index']));
