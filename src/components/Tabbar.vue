<template>
<div>
<!-- <mt-tab-container v-model="selected" swipeable>
  <mt-tab-container-item id="外卖">
    123
  </mt-tab-container-item>
  <mt-tab-container-item id="订单">
    456
  </mt-tab-container-item>
  <mt-tab-container-item id="发现">
    789
  </mt-tab-container-item>
</mt-tab-container> -->
<mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon" src="">
    首页
  </mt-tab-item>
  <mt-tab-item id="classification">
    <img slot="icon" src="">
    分类
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="">
    搜索
  </mt-tab-item>
  <mt-tab-item id="my">
    <img slot="icon" src="">
    我的
  </mt-tab-item>
</mt-tabbar>
</div>

</template>

<script>
export default {
    data() {
        return {
            selected: "home"
        }
    },
    watch: {
        'selected': {
            handler(){
                if(this.selected == "home") {
                    this.$router.push('/home');
                }
                if(this.selected == "classification") {
                    this.$router.push('/classification');
                }
                if(this.selected == "search") {
                    this.$router.push('/search');
                }
                if(this.selected == "my") {
                    this.$router.push('/my');
                }
            }
        }
    }
}
</script>

<style>

</style>