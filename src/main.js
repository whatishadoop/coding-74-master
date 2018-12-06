import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import i18n from 'common/i18n/index.js';
import router from './router/index.js';
import 'common/stylus/index.styl';
import 'lib-flexible';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

// 引入mintui
Vue.use(Mint);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
