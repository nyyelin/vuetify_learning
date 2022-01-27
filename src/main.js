import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import mdiAccount from '@mdi/js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  mdiAccount,
  render: h => h(App)
}).$mount('#app')
