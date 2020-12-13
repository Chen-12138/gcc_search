<template>
  <div class="timeLine">
    <div class="top flower"></div>
    <div class="division"></div>
    <div class="main">
      <div class="titleImg" :style="background"></div>
      <div class="content">
        <h2>{{ title }}</h2>
        <p style="text-indent: 1em">{{ content }}</p>
      </div>
    </div>
    <div class="division"></div>
    <div class="bottom flower"></div>
    <div style="margin-bottom: 40px">
      <pagination
        :total="total"
        :display="1"
        :currentPage="currentPage"
        :pagegroup="total"
        @pagechange="change"
      />
    </div>
  </div>
</template>
<script>
import pagination from "@/components/Pagination.vue";
import { Toast } from "vant";
export default {
  data() {
    return {
      history: [],
      currentPage: 1,
    };
  },
  created() {
    this.getHistory();
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
    async getHistory() {
      await this.$http.explorer
        .getHistory()
        .then((e) => {
          if (e.data.code === "1") {
            for (let i = 0; i < e.data.data.length; i++) {
              let arr = [];
              arr = e.data.data[i].photo.split(",");
              e.data.data[i].photo = arr;
            }
            this.history = e.data.data;
          }
        })
        .catch((errpr) => {
          this.tip({ type: "fail", message: "历史数据获取失败！" });
        });
    },
    change(item) {
      this.currentPage = item;
    },
  },
  computed: {
    total() {
      return this.history.length;
    },
    background() {
      if (this.history.length > 0) {
        return (
          "background-image: url(" +
          this.history[this.currentPage - 1].photo[1] +
          ")"
        );
      } else {
        return "background-color: rgb(161, 35, 31, 0.8)";
      }
    },
    content() {
      if (this.history.length > 0) {
        return this.history[this.currentPage - 1].content;
      }
    },
    title() {
      if (this.history.length > 0) {
        return this.history[this.currentPage - 1].title;
      }
    },
  },
  components: {
    pagination,
  },
};
</script>
<style lang="scss" scoped>
.timeLine {
  .flower {
    margin: 0 auto;
    width: 25px;
    height: 25px;
    background-image: url("../../assets/images/hua.png");
    background-position: center;
    background-size: cover;
  }
  .division {
    width: 100%;
    height: 20px;
    background-image: url("../../assets/images/bk-2.png");
    background-repeat: repeat-x;
    background-position: center;
    background-size: auto 20px;
    margin: 20px 0;
  }
  .main {
    position: relative;
    margin: 90px auto 0 auto;
    border-radius: 20px;
    width: 90%;
    background-image: linear-gradient(
      rgb(161, 35, 31, 0.2),
      rgb(161, 35, 31, 0.6)
    );
    padding: 25px 25px;
    .titleImg {
      position: absolute;
      height: 250px;
      width: 250px;
      border-radius: 50%;
      top: -80px;
      left: 50%;
      transform: translatex(-125px);
      background-repeat: no-repeat;
      background-size: cover;
    }
    .content {
      margin-top: 150px;
      width: 100%;
      line-height: 25px;
      font-size: 18px;
      color: #ecece3;
      h2 {
        margin: 15px 0;
      }
    }
  }
}
</style>