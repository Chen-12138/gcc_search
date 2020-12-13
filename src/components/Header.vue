<template>
  <header id="header" :class="colorStyle">
    <div class="wrapper">
      <div class="menu" @click="link" v-if="!isLogin">
        <div class="menu-icon">
          <i class="fa fa-align-justify" aria-hidden="true"></i>
          <img src="@/assets/images/qr.png" v-if="isQr">
        </div>
      </div>
      <div class="image-container">
        <img
          src="@/assets/images/ci_white.png"
          id="imageCi"
          v-if="colorStyle == 'white_header'"
        />
        <img
          src="@/assets/images/ci_black.png"
          id="imageCi"
          v-if="colorStyle == 'black_header'"
        />
      </div>
      <div class="main-container" v-if="!isLogin">
        <router-link :to="{ name: '搜索' }">
          <i class="fa fa-search" aria-hidden="true"></i
        ></router-link>

        <router-link :to="{ name:'用户中心' }"
          ><i class="fa fa-user" aria-hidden="true"></i
        ></router-link>
      </div>
    </div>
    <p>Catonese color culture</p>
  </header>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      open: false,
      colorStyle: null,
      isQr: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "粤彩文化",
    },
  },
  methods: {
    link() {
      this.$router.push({
        name: "探索",
      });
    },
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  watch: {
    $route: function (val) {
      //这里可以用职责链||组合模式来完成渲染
      let name = val.name;
      let setting = {
        color: {
          black: ["名家大师", "login", "用户中心"],
          white: ["首页", "藏品", "历史", "探索","详情页"],
        },
        qrCode: {
          show: ["首页"],
        },
      };
      for (const [key, list] of Object.entries(setting.color)) {
        if (list.find((res) => res == name)) {
          this.colorStyle = key + "_header";
        }
      }
      this.isQr=false;
      for (const [key, list] of Object.entries(setting.qrCode)) {
        if (list.find((res) => res == name)) {
          this.isQr = true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.white_header {
  color: #fff;
}
.black_header {
  color: black;
}
#header {
  width: 100%;
  height: 3.875rem;
  padding: 0 1.8rem;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;

  padding-bottom: 2px;
  .wrapper {
    width: 100%;
    height: calc(100% - 1rem);
    display: flex;
    align-items: flex-end;
    .menu {
      width: 3.75rem;
      text-align: left;
      .menu-icon{
        display: flex;
        justify-content: space-between;
        align-self:center;
        img{
          width:1.5rem;
          object-fit: cover;
        }
      }
    }
    .image-container {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      img {
        width: 2.8125rem;
        height: 2.6875rem;
        object-fit: cover;
      }
    }
    .main-container {
      display: flex;
      justify-content: space-between;
      width: 3.75rem;
    }
  }
  p {
    font-size: 1rem;
    transform: scale(0.5) translateY(-1rem);
  }
}
</style>