

import Vue from 'vue'
import router from './router'
import VCharts from 'v-charts'
// import ElementUI from 'element-ui';
import ElementUI from '../static/js/';
import 'element-ui/lib/theme-chalk/index.css';


import App from './App'


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
