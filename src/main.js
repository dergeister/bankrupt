import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from "./i18n/index.js";
import { createPinia } from "pinia";
import mitt from 'mitt';

import './assets/styles/style.scss';

const emitter = mitt();

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());

app.config.globalProperties.emitter = emitter;

app.mount('#app');
