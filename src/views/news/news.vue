<template>
  <div>
    <router-view class="page"/>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
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
