import Vue from 'vue'
import App from './App.vue'
import MultiLanguage from 'vue-multilanguage'

import language from './lang/language'

Vue.use( MultiLanguage, language)


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
