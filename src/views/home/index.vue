<template>
  <div class="home">
    <swiper />
    <introduce />
    <hot-content />
    <info />
  </div>
</template>

<script>
import swiper from "@/components/home/swiper.vue";
import introduce from "@/components/home/introduce.vue";
import hotContent from "@/components/home/hotContent.vue";
import info from "@/components/home/info.vue";
import Swiper from "../../components/home/swiper.vue";
export default {
  components: {
    swiper,
    introduce,
    hotContent,
    info,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: url(../../assets/images/background/home.jpg);
  background-size: cover;
  background-position: center;
}
</style>