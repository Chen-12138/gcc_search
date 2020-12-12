<template>
  <div class="loginPage page">
    <div class="divider"></div>
    <div class="body">
      <div class="fill"></div>
      <div v-if="choice === 'forget'" class="featuresBox">
        <div class="fill"></div>
        <forget @gotoLogin="choose('login')"></forget>
        <div class="fill"></div>
      </div>
      <div class="featuresBox" v-else>
        <button
          :class="{ left: true, choosed: choice === 'login' }"
          @click="choose('login')"
        >
          登录
        </button>
        <button
          :class="{ right: true, choosed: choice === 'register' }"
          @click="choose('register')"
        >
          注册
        </button>
        <div class="fill"></div>
        <login v-if="choice === 'login'" @forget="choose('forget')" />
        <register v-if="choice === 'register'" @gotoLogin="choose('login')" />
        <div class="fill"></div>
      </div>
      <div class="footer">
        <p>联系方式：1415748506@qq.com | 18304870026</p>
        <p>© 交互技术对传统手工艺创新性发展模式研究项目组（20YJA760031）</p>
      </div>
    </div>
  </div>
</template>
<script>
import login from "@/components/Login/login.vue";
import register from "@/components/Login/register.vue";
import forget from "@/components/Login/forget.vue";
export default {
  data() {
    return {
      choice: "login",
    };
  },
  methods: {
    choose(name) {
      this.choice = name;
    },
  },
  components: {
    login,
    register,
    forget,
  },
};
</script>
<style lang="scss" scoped>
.loginPage {
  background-image:url(../assets/images/background/登录页.jpg);
  background-size: cover;
  height: 100vh;
  .divider {
    background-image: url(../assets/images/bk.png);
    background-size: auto, 1.0625rem;
    background-position: center;
    background-repeat: repeat-x;
    width: 100%;
    height: 1.0625rem;
  }
  .body {
    height: 96%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .fill {
      height: 1rem;
      width: 1rem;
    }
    .featuresBox {
      width: 85%;
      min-height: 18.75rem;
      height: 25rem;
      background-color: rgb(255, 255, 255, 0.4);
      margin: 0 auto 0 auto;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5%;
      .left {
        left: 0;
        background-color: #894230;
        border: 0.0625rem solid #894230;
      }
      .right {
        right: 0;
        background-color: #a29273;
        border: 0.0625rem solid #a29273;
      }
      button {
        font-size: 0.875rem;
        position: absolute;
        width: 50%;
        height: 2.1875rem;
        top: 0;
        text-align: center;
        color: #ecece3;
        outline: none;
        cursor: pointer;
      }
      .choosed {
        border-radius: 0.625rem 0.625rem 0 0;
        top: -0.625rem;
        height: 2.8125rem;
      }
    }
    .footer {
      color: white;
      text-align: center;
      font-size: 0.6875rem;
      p:nth-child(1) {
        margin: 0.3125rem 0;
      }
      p:nth-child(2) {
        margin-top: 0.3125rem;
      }
    }
  }
}
</style>