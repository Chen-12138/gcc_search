<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import Header from '@/components/Header.vue'
export default {
    components:{
        Header,
        Tabbar,
    }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
