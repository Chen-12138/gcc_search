<template>
  <!--在视频外面加一个容器-->
  <div class="Video">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
  </div>
</template>
<script>
export default {
  name: "Video",
  mounted() {
    this.playerOptions["sources"][0]["src"] = this.videoUrl;
  },
  data() {
    return {
      // 视频播放
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "", //url地址
          },
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true, //全屏按钮
        },
      },
      show: false,
    };
  },
  methods: {
    closeVideo: function () {
      this.show = false;
    },
    openVideo: function () {
      this.show = true;
    },
  },
  props: {
    videoUrl: {
      type: String,
      default:
        "http://color-porcelain.oss-cn-hangzhou.aliyuncs.com/%E5%B9%BF%E5%BD%A9%E5%8E%86%E5%8F%B2/%E3%80%8A%E5%9B%BD%E5%AE%9D%E6%A1%A3%E6%A1%88%E3%80%8B%E6%B8%85%E5%98%89%E5%BA%86%E5%B9%BF%E5%BD%A9%E4%BA%BA%E7%89%A9%E7%BA%B9%E5%A4%A7%E8%85%95.mp4?Expires=1920129303&OSSAccessKeyId=LTAI4G13d8x7w6VAVSpbbbcw&Signature=YelulwAjs0YMpXsoKzomzip0t%2F4%3D",
    },
  },
};
</script>
<style lang="scss" scope>
.Video {
  height: 100%;
  width: 100%;
  .vjs-big-play-button{
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
}

</style>
