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
            <p>身份:{{ item.identify }}</p>
            <p>简介:{{ item.introduction }}</p>
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
  min-height: 300vh;
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
        margin: 10px auto;
        width: 25px;
        object-fit: cover;
      }
    }
    .recommend {
      width:100%;
      height: 36px;
      opacity: 0.85;
      background: rgba(156, 74, 58);
      border-radius: 5px;
      margin: max(3vh, 10px) auto;
      overflow: hidden;
      transition: 0.5s;
      .open-btn {
        font-size: 1rem;
        margin-left: 10px;
        margin-top: 10px;
        height: 1rem;
        text-align: left;
        color: white;
      }
      .wrapper {
        display: flex;
        .head {
          img {
            width: 142px;
            height: 142px;
            object-fit: cover;
            margin: 16px auto 45px 9px;
          }
        }
        .main {
          text-align: left;
          height: fit-content;
          p {
            margin: 10px 5px 0px 5px;
            &:nth-child(1) {
              font-size: 1.3rem;
            }
            &:nth-of-type(n + 2) {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
    