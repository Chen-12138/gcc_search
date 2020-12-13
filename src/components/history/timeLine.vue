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
    <div style="margin-bottom: 2.5rem">
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
    width: 1.5625rem;
    height: 1.5625rem;
    background-image: url("../../assets/images/hua.png");
    background-position: center;
    background-size: cover;
  }
  .division {
    width: 100%;
    height: 1.25rem;
    background-image: url("../../assets/images/bk-2.png");
    background-repeat: repeat-x;
    background-position: center;
    background-size: auto 1.25rem;
    margin: 1.25rem 0;
  }
  .main {
    position: relative;
    margin: 5.625rem auto 0 auto;
    border-radius: 1.25rem;
    width: 90%;
    background-image: linear-gradient(
      rgb(161, 35, 31, 0.2),
      rgb(161, 35, 31, 0.6)
    );
    padding: 1.5625rem 1.5625rem;
    .titleImg {
      position: absolute;
      height: 15.625rem;
      width: 15.625rem;
      border-radius: 50%;
      top: -5rem;
      left: 50%;
      transform: translatex(-7.8125rem);
      background-repeat: no-repeat;
      background-size: cover;
    }
    .content {
      margin-top: 9.375rem;
      width: 100%;
      line-height: 1.5625rem;
      font-size: 1.125rem;
      color: #ecece3;
      h2 {
        margin: 0.9375rem 0;
      }
    }
  }
}
</style>