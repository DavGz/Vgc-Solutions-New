import i18next from 'i18next';
import { eng } from './en.jsx';
import { esp } from './es.jsx';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: eng,
      },
      es: {
        translation: esp,
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['path', 'navigator'],
      caches: [],
    },
  });

export default i18next;
