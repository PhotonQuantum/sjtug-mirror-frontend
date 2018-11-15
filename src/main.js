// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/style/site.scss'
import 'font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import * as Sentry from '@sentry/browser'

Vue.config.productionTip = false

Sentry.init({
  dsn: 'https://cb947836e1a74618910282917ca66e3d@sentry.io/1323290',
  integrations: [new Sentry.Integrations.Vue({ Vue })]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
