<template>
  <div class="swipering" indicator-color="#6d351d">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
      ref="swiper"
    >
      <van-swipe-item
        v-for="(item, index) in data"
        :key="index"
        class="swiperItems"
        :style="{ backgroundImage: 'url(' + item + ')' }"
      ></van-swipe-item>
      <template #indicator>
        <ul class="myIndicator">
          <li
            :class="{ item, active: current == index }"
            v-for="(item, index) in data"
            :key="index"
            @click="change(index)"
          ></li>
        </ul>
      </template>
    </van-swipe>
    <div id="swiperImg"></div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      current: 0,
      data: [
        require("../../assets/images/slider1.png"),
        require("../../assets/images/藏品1.png"),
        require("../../assets/images/游戏翻.png"),
        require("../../assets/images/slider2.png"),
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    change(index) {
      // console.log(this.$refs.swiper);
      this.$refs.swiper.swipeTo(index);
    },
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
};
</script>
<style>
.swipering {
  width: 95%;
  margin: 0 auto;
  position: relative;
}
.my-swipe {
  z-index: 20;
}
.swiperItems {
  height: 10.625rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.myIndicator {
  overflow: hidden;
  display: table;
  margin: 0.625rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swipering .item {
  width: 1.25rem;
  height: 0.375rem;
  border-radius: 0.1875rem;
  background: #42210b;
  margin-left: 0.1875rem;
}
.swipering .active {
  background: #53ad9e;
}
#swiperImg {
  background-image: url("../../assets/images/二维码1.png");
  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: -2.8125rem;
  width: 3.125rem;
  height: 4.375rem;
}
</style>