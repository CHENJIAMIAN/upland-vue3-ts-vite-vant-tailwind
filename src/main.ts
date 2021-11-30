import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import { Toast } from "vant";
import { vantPlugins } from "./plugins/vant";
import Bmob, { globalPlugins } from "./plugins/global";


import "./assets/style/reset.less";
import "./assets/style/global.less";

const app = createApp(App);

app.config.globalProperties.$bmob = Bmob;
app.config.globalProperties.$toast = Toast;

app
  .use(Toast)
  .use(store)
  .use(router)
  .use(globalPlugins)
  .use(vantPlugins)
  .mount("#app");
