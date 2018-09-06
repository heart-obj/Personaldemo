// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import index from './index'
import router from './router'
import axios from 'axios';
import store from './vuex/store'
import ElementUI from 'element-ui';
import vueResource from 'vue-resource';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css';
Vue.use(ElementUI,Vuex,vueResource);
Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.prototype.$store=store;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { index },
  template: '<index/>'
})
