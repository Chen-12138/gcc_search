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
  padding: 0 20px;
  width: 100%;
  margin: 70px 0;
  .infoHead {
    .title {
      height: 40px;
      width: 120px;
      border: solid 1px #edcbbd;
      border-radius: 10px;
      margin: 0 auto;
      font-size: 20px;
      line-height: 40px;
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
        height: 2px;
        border: none;
        border-top: 2px solid #edcbbd;
      }
      .left {
        height: 17px;
        width: 17px;
        background-image: url(../../assets/images/hua.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .right {
        height: 17px;
        width: 17px;
        background-image: url(../../assets/images/hua.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
  }
  .container {
    margin: 10px auto 0 auto;
    border-radius: 20px;
    width: 95%;
    // height: 300px;
    background-color: #9f211e;
    padding: 20px 20px;
    .item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;
      .circle {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: red;
      }
      .contentTitle {
        width: 80%;
        color: #edcbbd;
        font-size: 17px;
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
        height: 15px;
        width: 25px;
        background-image: url(../../assets/images/bk.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25px 15px;
      }
    }
  }
}
</style>