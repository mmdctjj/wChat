// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vant from 'vant'
import '../node_modules/vant/lib/index.css'
Vue.use(vant)
Vue.config.productionTip = false
Vue.prototype.$ws = new WebSocket("ws://127.0.0.1:10000")
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
