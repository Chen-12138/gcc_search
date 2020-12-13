<template>
  <div class="info">
    <div class="infoHead">
      <div class="title">资讯</div>
      <div class="division">
        <div class="left"></div>
        <hr />
        <div class="right"></div>
      </div>
    </div>
    <div class="container">
      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="openAnotherTab(item)"
      >
        <div class="circle" :style="color[index % 7]"></div>
        <div class="contentTitle">
          {{ item.title }}
        </div>
        <div class="imgBox"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: [
        "background-color: #729075;",
        "background-color: #47ad98;",
        "background-color: #a5baac;",
        "background-color: #2a2f3f;",
        "background-color: #998b6c;",
        "background-color: #736a40;",
        "background-color: #aeab80;",
      ],
      data: [],
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    tip({ message, type }) {
      Toast({
        type: type,
        message: message,
        closeOnClick: true,
        duration: 1500,
      });
    },
    async getInfo() {
      await this.$http.Home.getInfo()
        .then((e) => {
          if (e.data.code === "1") {
            this.data = e.data.data;
          }
        })
        .catch((error) => {
          this.tip({ type: "fail", message: "资讯获取失败！" });
        });
    },
    openAnotherTab(item) {
      window.open(item.url);
    },
  },
};
</script>
<style lang="scss" scoped>
.info {
  padding: 0 1.25rem;
  width: 100%;
  margin: 4.375rem 0;
  .infoHead {
    .title {
      height: 2.5rem;
      width: 7.5rem;
      border: solid 0.0625rem #edcbbd;
      border-radius: 0.625rem;
      margin: 0 auto;
      font-size: 1.25rem;
      line-height: 2.5rem;
      color: #edcbbd;
      text-align: center;
      background-color: #a1231f;
    }
    .division {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      hr {
        width: 85%;
        height: 0.125rem;
        border: none;
        border-top: 0.125rem solid #edcbbd;
      }
      .left {
        height: 1.0625rem;
        width: 1.0625rem;
        background-image: url(../../assets/images/hua.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .right {
        height: 1.0625rem;
        width: 1.0625rem;
        background-image: url(../../assets/images/hua.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
  }
  .container {
    margin: 0.625rem auto 0 auto;
    border-radius: 1.25rem;
    width: 95%;
    background-color: #9f211e;
    padding: 1.25rem 1.25rem;
    .item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.9375rem 0;
      .circle {
        height: 0.9375rem;
        width: 0.9375rem;
        border-radius: 50%;
        background-color: red;
      }
      .contentTitle {
        width: 80%;
        color: #edcbbd;
        font-size: 1.0625rem;
        overflow: hidden;
        white-space: normal;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        -moz-text-overflow: ellipsis;
        white-space: nowrap;
      }
      .imgBox {
        height: 0.9375rem;
        width: 1.5625rem;
        background-image: url(../../assets/images/bk.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 1.5625rem 0.9375rem;
      }
    }
  }
}
</style>