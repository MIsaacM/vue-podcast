import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/Router';

import store from './helpers/storeHelper';
import utils from './utils/utils';

const app = createApp(App);

app.config.globalProperties.$store = store;
app.config.globalProperties.$utils = utils;
const router = new Router();
router.setBeforeEach(app.config.globalProperties.$store, app);
router.setAfterEach(app.config.globalProperties.$store, app);
app.use(router.router);


app.mount('#app');
