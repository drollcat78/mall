// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLazyLoad from 'vue-lazyload'

import 'jquery'
import 'css/bootstrap/css/bootstrap.min.css'
import 'css/bootstrap/js/bootstrap.js'
import 'css/normalize.css'

Vue.config.productionTip = false;
Vue.use(vueLazyLoad, {
  loading: require('/static/images/loading-svg/loading-bars.svg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
