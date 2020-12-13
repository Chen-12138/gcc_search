<template>
  <div class="timeLine">
    <div class="top flower"></div>
    <div class="division"></div>
    <div class="title">{{ title }}</div>
    <div class="main">
      <div v-for="(item, index) in videoData" :key="index">
        <Video :videoUrl="item.url" v-if="index == currentPages - 1" />
      </div>
    </div>
    <div class="division"></div>
    <div class="bottom flower"></div>
    <div style="margin-bottom: 2.5rem">
      <pagination
        :total="total"
        :display="1"
        :currentPage="currentPages"
        :pagegroup="total"
        @pagechange="change"
      />
    </div>
  </div>
</template>
<script>
import pagination from "@/components/Pagination.vue";
import Video from "@/components/common/video.vue";
import { Toast } from "vant";
export default {
  data() {
    return {
      videoData: [],
      currentPages: 1,
    };
  },
  created() {
    this.getMedia();
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
    async getMedia() {
      await this.$http.explorer
        .getMedia()
        .then((e) => {
          if (e.data.code === "1") {
            this.videoData = e.data.data;
          }
        })
        .catch((error) => {
          this.tip({ type: "fail", message: "相关视频获取失败！" });
        });
    },
    change(item) {
      this.currentPages = item;
    },
  },
  computed: {
    total() {
      return this.videoData.length;
    },
    title() {
      if (this.videoData.length > 0) {
        return this.videoData[this.currentPages - 1].title;
      }
    },
  },
  components: {
    pagination,
    Video,
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
  .title {
    // height: 2.5rem;
    width: 15rem;
    border: solid 0.0625rem #edcbbd;
    border-radius: 0.625rem;
    margin: 0 auto;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: #edcbbd;
    text-align: center;
    background-color: #a1231f;
  }
  .main {
    position: relative;
    margin: 1.875rem auto;
    border-radius: 1.25rem;
    width: 92%;
    background-image: linear-gradient(
      rgb(161, 35, 31, 0.2),
      rgb(161, 35, 31, 0.6)
    );
  }
}
</style>