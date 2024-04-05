import spanish from './es.json';
import english from './en.json';

const languages = {
	SPANISH: 'es',
	ENGLISH: 'en',
};

export const getI18N = ({ currentLocale }: { currentLocale: string }) => {
	if (currentLocale === languages.ENGLISH) {
		return english;
	}
	if (currentLocale === languages.SPANISH) {
		return spanish;
	}
	return english;
};
const HREF_LANGUAGE = {
	en: {
		href: '/',
	},
	es: {
		href: '/es',
	},
};
export const getHref = (currentLocale: string) => {
	return HREF_LANGUAGE[currentLocale];
};
