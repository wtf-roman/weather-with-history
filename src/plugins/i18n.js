import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/locales/messages';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'ru', // set fallback locale
    messages, // set locale messages
});
