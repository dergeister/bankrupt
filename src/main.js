import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from "./i18n/index.js";
import { createPinia } from "pinia";

import './assets/styles/style.scss';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());

app.mount('#app');
