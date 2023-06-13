import Vue from 'vue'
import App from './App.vue'
import TheHeader from './components/TheHeader.vue'

Vue.component('TheHeader', TheHeader)

const app = new Vue({
  render: (h) => h(App)
})

app.$mount('#app')
