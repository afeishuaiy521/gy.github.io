// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLazyLoad from 'vue-LazyLoad'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(vueLazyLoad,{
  loading: 'static/loading-svg/loading-bars.svg',
  attempt: 3 // default 1
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
