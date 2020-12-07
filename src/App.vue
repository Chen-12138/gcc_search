<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
    components:{
        Header
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
