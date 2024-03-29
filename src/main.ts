import { createApp } from 'vue';

// @ts-ignore
import App from './App.vue';

import router from './router';
import store from './store';

import Vant, { Toast } from 'vant';

import 'src/assets/style/reset.less';

import 'vant/lib/index.less';

import './index.css';

import 'swiper/css';
import "swiper/css/pagination"

import 'src/assets/style/global.less';

const app = createApp(App);

app.config.globalProperties.$toast = Toast;

window._AMapSecurityConfig = {
    securityJsCode: '054eaba337dbf1528e915453889888e5',
};


app.use(store)
    .use(router)
    .use(Toast)
    .use(Vant)
    .mount('#app');
