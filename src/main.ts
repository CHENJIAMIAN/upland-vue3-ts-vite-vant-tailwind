import { createApp } from 'vue';

// @ts-ignore
import App from './App.vue';

import router from './router';
import store from './store';

import Vant, { Toast } from 'vant';

import 'src/assets/style/reset.less';
import 'src/assets/style/global.less';


import './index.css'

import 'vant/lib/index.less';

const app = createApp(App);

app.config.globalProperties.$toast = Toast;

window._AMapSecurityConfig = {
    securityJsCode:'054eaba337dbf1528e915453889888e5',
}

app.use(store)
    .use(router)
    .use(Toast)
    .use(Vant)
    .mount('#app');
