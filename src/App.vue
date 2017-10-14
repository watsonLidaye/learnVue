<template>
  <div id="app">
  <cmheader></cmheader>
    <router-view/>
    <cmfooter></cmfooter>
  </div>
</template>
<script>

import cmheader from '@/components/tpl/header'
import cmfooter from '@/components/tpl/footer'
export default {
  name: 'app',
  components:{
    cmheader,
    cmfooter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@import "./css/common.css";
@import "./css/public.css";
</style>
