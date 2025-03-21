import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';

import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import { initializeDatabase } from './database/data-source';

// import './assets/styles/style.css';

import { createPinia } from 'pinia';

initializeDatabase();

const pinia = createPinia();

const app = createApp(App)
  .use(IonicVue)
  .use(router) 
  .use(pinia)

router.isReady().then(() => {
  app.mount('#app');
});
