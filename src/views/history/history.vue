<template>
  <div class="history">
    <div class="title">
      <div class="border_img"></div>
      <div class="left">
        <div class="left_top">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
        <div class="left_bottom">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
      </div>
      <div class="content">历史</div>
      <div class="right">
        <div class="right_top">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
        <div class="right_bottom">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
      </div>
      <div class="border_img"></div>
    </div>
    <div class="body">
      <p style="text-indent: 1em">
        广彩瓷始为中国明代的广州三彩，以后发展为五彩，并在清代乾隆年间逐步形成独特的艺术风格。广彩瓷吸取了民间优秀的工艺图案和戏剧艺术的舞台装饰手法，具有浓郁的东方民族特色。17世纪是广彩瓷对外贸易的鼎盛时期。当时，法王路易十四命令宰相马扎兰派人到广州定制带有法国甲纹章的瓷器。从此，广州人用景德镇的素胎瓷器，描绘出奇特的外国纹章、风光、图案，注上外文款识，制成彩瓷销往国外。20世纪40年代，广彩瓷渐趋衰落，生产一度中断。1956年才恢复生产。
      </p>
    </div>
    <div class="foot">
      <div>
        <button class="footBtn" @click="choose('timeLine')">时间线</button>
        <div class="division" v-if="choice === 'timeLine'">
          <hr />
          <i class="fa fa-sort-desc bottom"></i>
        </div>
      </div>
      <div>
        <button class="footBtn" @click="choose('video')">相关视频</button>
        <div class="division" v-if="choice === 'video'">
          <hr />
          <i class="fa fa-sort-desc bottom"></i>
        </div>
      </div>
    </div>
    <time-line v-if="choice === 'timeLine'" />
    <relateVideo v-if="choice === 'video'" />
  </div>
</template>
<script>
import timeLine from "@/components/history/timeLine.vue";
import relateVideo from "@/components/history/relateVideo.vue";
export default {
  data() {
    return {
      choice: "timeLine",
    };
  },
  methods: {
    choose(name) {
      this.choice = name;
    },
  },
  components: {
    timeLine,
    relateVideo,
  },
};
</script>
<style lang="scss" scoped>
.history {
  background-image: url("../../assets/images/background/AI手机端长图 历史-04.jpg");
  background-size: cover;
  background-position: center;
  // height: 100vh;
  width: 100%;
  .title {
    width: 55%;
    margin: 1.25rem auto 0.625rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .border_img {
      width: 1.5625rem;
      height: 0.9375rem;
      background-image: url(../../assets/images/bk.png);
      background-size: 1.5625rem 0.9375rem;
      background-position: center;
      margin: 0 0.9375rem;
    }
    .imgBox {
      width: 1.25rem;
      height: 1.25rem;
    }
    .left {
      .left_top {
        transform: rotate(-90deg);
      }
      .left_bottom {
        transform: rotate(-180deg);
      }
    }
    .right {
      .right_top {
        transform: rotate(0deg);
      }
      .right_bottom {
        transform: rotate(90deg);
      }
    }
    .content {
      line-height: 1.5625rem;
      font-size: 1.5rem;
      color: #ecece3;
      font-weight: 500;
    }
  }
  .body {
    margin: 1.25rem auto 0 auto;
    border-radius: 1.25rem;
    width: 90%;
    // height: 18.75rem;
    line-height: 1.5625rem;
    font-size: 0.9375rem;
    color: #ecece3;
    background-image: linear-gradient(
      rgb(161, 35, 31, 0.2),
      rgb(161, 35, 31, 0.5)
    );
    padding: 1.25rem 1.25rem;
  }
  .foot {
    margin: 2.5rem auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
    .footBtn {
      height: 2.5rem;
      width: 6.25rem;
      font-size: 1.125rem;
      background-color: #a1231f;
      border: 0.0625rem #ecece3 solid;
      border-radius: 0.625rem;
      color: #ecece3;
      outline: none;
      margin-bottom: 0.625rem;
    }
    .division {
      hr {
        width: 100%;
        height: 0.125rem;
        border: none;
        border-top: 0.125rem solid #edcbbd;
      }
      .bottom {
        color: #ecece3;
        font-size: 1.875rem;
        transform: translateY(-0.8125rem);
      }
    }
  }
}
</style>