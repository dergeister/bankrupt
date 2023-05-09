import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from "./i18n/index.js";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/styles/theme.css';
import './assets/styles/style.css';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());
app.use(PrimeVue);

app.mount('#app');
