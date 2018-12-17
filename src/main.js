import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import i18n from 'common/i18n/index.js';
import router from './router/index.js';
import 'common/stylus/index.styl';
import 'lib-flexible';
// 引入mintui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
// 引入echarts
import echarts from 'echarts';
/* eslint-disable no-unused-vars */
import world from './directive';

// 导入全局插件
// import barchart from './barchartplugin';
// Vue.use(barchart);

Vue.use(Mint);
Vue.prototype.$echarts = echarts;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
