import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';
import enUS from 'src/i18n/en-US/index.ts'; // Import English translations

const i18n = createI18n({
  locale: 'en-US',
  messages: {
    ...messages,
    'en-US': enUS, // Add 'en-US' to the list of locales
  },
});

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});

export { i18n };
