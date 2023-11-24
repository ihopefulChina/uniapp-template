import { createI18n } from 'vue-i18n';
import en from './en/index';
import zhHans from './zh-Hans/index';
import { isI18n } from '~/config';

const languageStorage = uni?.getStorageSync('language');
const locale = (languageStorage ? languageStorage : uni.getLocale()) ?? 'en';

const i18n = createI18n({
    locale: isI18n ? locale : 'zh-Hans',
    messages: {
        en,
        'en-US': en,
        'zh-Hans': zhHans,
    },
});

export default i18n;
