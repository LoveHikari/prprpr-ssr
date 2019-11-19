import Vue from 'vue'
import App from './App.vue'

import VueRouter from './router/router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import VueClipboard from 'vue-clipboard2';
import VueQr from 'vue-qr';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueClipboard);
Vue.use(VueQr);

new Vue({
    render: h => h(App),
    router: VueRouter
}).$mount('#app');
