<template>
  <div id="content">
    <mt-search class="search"
    v-model="value"
    cancel-text="取消"
    placeholder="搜索">
  </mt-search>
      我是搜索页面~~~
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.search{
  height: 50px;
}
</style>