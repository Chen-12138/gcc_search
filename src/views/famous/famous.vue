<template>
  <div id="famous">
    <header>
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/bk.png" alt />
      <img src="@/assets/images/bk.png" alt />
      <p>名家大师</p>
    </header>

    <div
      class="videoContainer"
      v-for="(item, index) in famous"
      :key="index"
      ref="videoContainer"
    >
      <div :id="item.expertId" class="vedio-box">
        <img src="@/assets/images/hua-black.png" alt="" />
        <Video :videoUrl="item.url"></Video>
      </div>
      <div class="recommend">
        <div class="open-btn" @click="open(index)">查看详情></div>
        <div class="wrapper">
          <div class="head">
            <img :src="item.avatar" alt="error" />
          </div>
          <div class="main">
            <p>{{ item.name }}</p>
            <p><span>身份</span> :{{ item.identify }}</p>
            <p><span>简介</span> :{{ item.introduction }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import video from "@/components/common/video.vue";
export default {
  name: "",
  data() {
    return {
      famous: [],
    };
  },
  components: {
    Video: video,
  },
  async mounted() {
    await this.$http.explorer.getFamous().then((res) => {
      let data = res.data.data;
      for (let item of data) {
        item.open = false;
      }
      this.famous = data;
    });
    console.log(this.famous);
  },
  methods: {
    open(i) {
      this.famous[i].open = !this.famous[i].open;
      let v = this.$refs.videoContainer[i];
      let r = v.getElementsByClassName("recommend")[0];
      let mh = v.getElementsByClassName("main")[0].offsetHeight;
      if (!this.famous[i].open) {
        r.style.height = "2rem";
      } else {
        r.style.height = mh + 46 + "px";
      }
    },
  },
};
</script>

<style lang='scss' scoped>
#famous {
  background-image: url("../../assets/images/background/famous.jpg");
  background-size: contain;
  min-height: 100vh;
  header {
    $height: 40px;
    margin: 1rem auto 0.5rem auto;
    position: relative;
    width: 130px;
    height: $height;
    line-height: $height;
    img {
      position: absolute;
      width: 20px;
      object-fit: cover;
      &:nth-child(1) {
        top: 0;
        left: 0;
        transform: rotateZ(-90deg);
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
        transform: rotateZ(180deg);
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
        transform: rotateZ(90deg);
      }
      &:nth-child(5) {
        left: 0;
        top: 50%;
        transform: translate(calc(-100% - 10px), -50%);
      }
      &:nth-child(6) {
        right: 0;
        top: 50%;
        transform: translate(calc(100% + 10px), -50%);
      }
    }
    p {
      font-size: 1.4rem;
    }
  }
  .videoContainer {
    margin: 0 auto;
    width: calc(100% - 3rem);
    .vedio-box {
      img {
        margin: 0.625rem auto;
        width: 1.5625rem;
        object-fit: cover;
      }
    }
    .recommend {
      width:100%;
      height: 2.25rem;
      opacity: 0.85;
      background: rgba(156, 74, 58);
      border-radius: 0.3125rem;
      margin: 0.625rem auto;
      // margin: max(3vh, 0.625rem) auto;
      overflow: hidden;
      transition: 0.5s;
      .open-btn {
        font-size: 1rem;
        margin-left: 0.625rem;
        margin-top: 0.625rem;
        height: 1rem;
        text-align: left;
        color: white;
      }
      .wrapper {
        display: flex;
        .head {
          img {
            width: 8.875rem;
            height: 8.875rem;
            object-fit: cover;
            margin: 1rem auto 2.8125rem 0.5625rem;
          }
        }
        .main {
          text-align: left;
          height: fit-content;
          
          p {
            color: rgba(255, 255, 255,0.9);
            margin: 0.625rem 0.3125rem 0rem 0.3125rem;
            &:nth-child(1) {
                   color:white;
              font-size: 1.3rem;
            }
            &:nth-of-type(n + 2) {
              font-size: 0.8rem;
            }
            span{
              color:white;
              font-size:1rem;
            }
          }
        }
      }
    }
  }
}
</style>
    