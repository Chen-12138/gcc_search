<template>
  <div id="explorer" class="page">
    <ul>
      <li class="item">
        <div class="item-icon">
          <img src="@/assets/images/hua.png" id="hua">
        </div>
        <div class="item-header-main">
          <p>首页</p>
          <img src="@/assets/images/bk.png" >
        </div>
      </li>
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
#explorer {
  background-image:url('../../assets/images/background/home.jpg');
  height: 100vh;
  .item{
    #hua{
      width:30px;
    }
  }
}
</style>
