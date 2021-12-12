import { createApp } from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';

import Vant, { Toast } from 'vant';

import './assets/style/reset.less';
import './assets/style/global.less';

import 'vant/lib/index.less';


const app = createApp(App);

app.config.globalProperties.$toast = Toast;

window._AMapSecurityConfig = {
    securityJsCode:'054eaba337dbf1528e915453889888e5',
}

app.use(store)
    .use(router)
    .use(Vant)
    .mount('#app');
