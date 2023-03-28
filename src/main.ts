import { createApp } from 'vue'

import App from './organisms/app/index.vue'
import i18n from './plugins/i18n'
import pinia from './plugins/pinia'
import router from './plugins/router'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')
