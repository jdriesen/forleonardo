<template>
  <div id="app">
    <lv-menu></lv-menu>
    <lv-content></lv-content>
    <myfooter></myfooter>
  </div>
</template>

<script>
import LvMenu from './Menu.vue'
import LvContent from './Content.vue'
import myfooter from './myFooter.vue'

export default {
  name: 'app',
  components: {
    LvMenu,
    LvContent,
    'myfooter' : myfooter 
  },
  mounted() {
  	console.log(this)
  }
}
</script>
