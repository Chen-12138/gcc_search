<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view class="page"/>
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
.page{
  padding-top:62px;
  position: absolute;
  top:0;
  width: 100%;
  z-index: 1;
  background-position: center;
  background-size: cover;
}
</style>
