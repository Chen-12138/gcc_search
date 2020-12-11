<template>
  <div class="login">
    <div class="loginHead">
      <div class="headImg"></div>
      <div class="headText">登入,发现更多</div>
      <div class="headImg"></div>
    </div>
    <p class="plain">登录后即可开启所有内容，获得最佳阅读体验。</p>
    <input-span
      @postInput="getUserName"
      @fun="clear"
      :inputData="userName"
      type="text"
      leftIcon="fa fa-envelope-o"
      rightIcon="fa fa-close (alias)"
      label="邮箱"
      placeholder="请输入邮箱"
      :tip="checkUserName"
      message="邮箱不能为空！"
      ref="userName"
    />
    <input-span
      @postInput="getPassword"
      @fun="changePwdPane"
      :inputData="password"
      v-if="!showPwd"
      type="password"
      leftIcon="fa fa-lock"
      rightIcon="fa fa-eye-slash"
      label="密码"
      placeholder="请输入密码"
      :tip="checkPsw"
      message="密码不能为空！"
      ref="password"
    />
    <input-span
      @postInput="getPassword"
      @fun="changePwdPane"
      v-else
      :inputData="password"
      type="text"
      leftIcon="fa fa-lock"
      rightIcon="fa fa-eye"
      label="密码"
      placeholder="请输入密码"
      :tip="checkPsw"
      message="密码不能为空！"
      ref="password"
    />
    <div class="checkBox">
      <div @click="switchCheck()">
        <li v-if="!switchChecked" class="fa fa-circle-o circle"></li>
        <li v-else class="fa fa-check-circle-o checked"></li>
        记住密码
      </div>
      <div @click="forget">
        <li class="fa fa-question-circle-o question"></li>
        忘记密码
      </div>
    </div>
    <button class="loginBtn" @click="login">登入</button>
  </div>
</template>
<script>
import inputSpan from "@/components/common/inputSpan";
import { mapMutations } from "vuex";
import { setToken } from "@/utils/auth";
import { Toast } from "vant";
export default {
  data() {
    return {
      userName: "",
      password: "",
      showPwd: false,
      switchChecked: true,
    };
  },
  methods: {
    switchCheck() {
      this.switchChecked = !this.switchChecked;
    },
    getUserName(values) {
      this.userName = values;
    },
    getPassword(values) {
      this.password = values;
    },
    clear() {
      this.userName = "";
    },
    changePwdPane() {
      this.showPwd = !this.showPwd;
    },
    forget() {
      this.$emit("forget");
    },
    tip({ message, type }) {
      Toast({
        type: type,
        message: message,
        closeOnClick: true,
        duration: 1500,
      });
    },
    async login() {
      this.$refs.userName.bluring();
      this.$refs.password.bluring();
      if (!this.checkPsw && !this.checkUserName) {
        await this.$http.Login.login({
          email: this.userName,
          pwd: this.password,
        })
          .then((e) => {
            if (e.data.code === "1") {
              this.tip({ type: "success", message: "登录成功" });
              let user = { email: this.userName };
              setToken(e.headers.authorization);
              window.localStorage.setItem(
                "token",
                JSON.stringify(e.headers.authorization)
              );
              window.sessionStorage.setItem("user", JSON.stringify(user));
              this.setUser(user);
              this.$router.push({ name: "首页" });
            }
          })
          .catch((err) => {
            this.tip({ type: "fail", message: "登录失败" });
            console.log(err);
          });
      }
    },
    ...mapMutations({ setUser: "SET_USER" }),
  },
  computed: {
    checkPsw() {
      if (this.password) {
        return false;
      } else {
        return true;
      }
    },
    checkUserName() {
      if (this.userName) {
        return false;
      } else {
        return true;
      }
    },
  },
  components: {
    inputSpan,
  },
};
</script>

<style lang="scss" scope>
.login {
  width: 100%;
  /* height: 100%; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.875rem;
  .loginHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    .headText {
      color: #4c3e2b;
      font-size: 1.25rem;
      margin: 0 0.625rem;
    }
    .headImg {
      background-image: url(../../assets/images/bk.png);
      background-size: auto, 0.9375rem;
      background-position: center;
      background-repeat: no-repeat;
      width: 2.8125rem;
      height: 1.125rem;
    }
  }
  .plain {
    color: #755f34;
    font-size: 0.8125rem;
    text-align: center;
    margin-bottom: 1.25rem;
  }
  .checkBox {
    width: 90%;
    font-size: 0.875rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #755f34;
    margin-top: 0.9375rem;
    div {
      cursor: pointer;
      .checked {
        color: #78cf59;
      }
      .circle {
        color: #755f34;
      }
      .question {
        color: #755f34;
      }
    }
  }
  .loginBtn {
    font-size: 0.875rem;
    height: 2.1875rem;
    width: 6.25rem;
    margin: 1.25rem 0;
    color: white;
    background-color: #988b6f;
    outline: none;
    border: none;
    border-radius: 0.625rem;
  }
}
</style>