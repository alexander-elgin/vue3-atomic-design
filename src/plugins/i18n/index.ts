import { createI18n } from 'vue-i18n';

import en from './locales/en.json'
import ru from './locales/ru.json'

export default createI18n({
  allowComposition: true,
  locale: import.meta.env.VUE_APP_I18N_LOCALE || 'en',
  messages: { en, ru },
});
