import Vue from 'vue'
import App from './App.vue'
Vue.component('vue-img', require('vue-image-component'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
