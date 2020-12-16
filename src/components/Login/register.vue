<template>
  <div class="register">
    <div class="registerHead">
      <div class="headImg"></div>
      <div class="headText">加入我们</div>
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
      :tip="checkUserName.status"
      :message="checkUserName.message"
      ref="userName"
    />
    <div class="code">
      <input-span
        @postInput="postCode"
        :inputData="code"
        type="text"
        label="验证码"
        placeholder="请输入验证码"
        :tip="checkCode.status"
        :message="checkCode.message"
        ref="code"
      />
      <button @click="getCode">获取验证码</button>
    </div>
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
      :tip="checkPsw.status"
      :message="checkPsw.message"
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
      :tip="checkPsw.status"
      :message="checkPsw.message"
      ref="password"
    />
    <button class="registerBtn" @click="register">注册</button>
  </div>
</template>
<script>
import inputSpan from "@/components/common/inputSpan";
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      userName: "",
      password: "",
      code: "",
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
    postCode(values) {
      this.code = values;
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
    tip({ message, type }) {
      Toast({
        type: type,
        message: message,
        closeOnClick: true,
        duration: 2000,
      });
    },
    async getCode() {
      this.$refs.userName.bluring();
      if (!this.checkUserName.status) {
        await this.$http.Login.getCode({ email: this.userName })
          .then((e) => {
            if (e.data.code === "1") {
              this.tip({
                message: "验证码发送成功,请注意查收！",
                type: "success",
              });
            }
          })
          .catch((err) => {
            this.tip({ message: "验证码发送失败！", type: "fail" });
            console.log(err);
          });
      }
    },
    async register(event) {
      event.stopPropagation();
      event.preventDefault();
      this.$refs.userName.bluring();
      this.$refs.code.bluring();
      this.$refs.password.bluring();
      if (
        !this.checkUserName.status &&
        !this.checkCode.status &&
        !this.checkPsw.status
      ) {
        let user = {
          email: this.userName,
          password: this.password,
          code: this.code,
        };
        await this.$http.Login.register(user)
          .then((e) => {
            if (e.data.code === "1") {
              Dialog.alert({
                title: "提示",
                message: "注册成功，请前往登录！",
              }).then(() => {
                this.$emit("gotoLogin");
              });
            }
          })
          .catch((err) => {
            this.tip({ message: "注册失败！", type: "fail" });
          });
      }
    },
  },
  computed: {
    checkPsw() {
      if (this.password.length <= 0) {
        return {
          message: "密码不能为空",
          status: true,
        };
      } else if (this.password.length < 8) {
        return {
          message: "密码长度应不小于8位",
          status: true,
        };
      } else if (this.password.length > 12) {
        return {
          message: "密码太长,应在8-12位范围内",
          status: true,
        };
      } else {
        let level;
        if (this.password.length >= 10) {
          level = 15;
        } else {
          level = this.password.length;
        }
        if (/[a-z]/.test(this.password)) level += 20;
        if (/[A-Z]/.test(this.password)) level += 20;
        if (/[0-9]/.test(this.password)) level += 20;
        if (level < 40) {
          return {
            message: "密码至少需要包含字母和数字",
            status: true,
          };
        } else {
          return {
            message: "",
            status: false,
          };
        }
      }
    },
    checkUserName() {
      if (this.userName) {
        return {
          message: "",
          status: false,
        };
      } else {
        return {
          message: "邮箱不能为空",
          status: true,
        };
      }
    },
    checkCode() {
      if (this.code) {
        return {
          message: "",
          status: false,
        };
      } else {
        return {
          message: "验证码不能为空",
          status: true,
        };
      }
    },
  },
  components: {
    inputSpan,
  },
};
</script>

<style lang="scss" scope>
.register {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 2.1875rem;
  .registerHead {
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
      background-size: 1.5625rem, 0.9375rem;
      background-position: center;
      background-repeat: no-repeat;
      width: 1.5625rem;
      height: 0.9375rem;
    }
  }
  .plain {
    color: #755f34;
    font-size: 0.8125rem;
    text-align: center;
    margin-bottom: 1.25rem;
  }
  .code {
    margin: 0 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    button {
      font-size: 0.875rem;
      width: 7.5rem;
      height: 2.5rem;
      color: white;
      background-color: #988b6f;
      border: 0.0625rem solid #988b6f;
      border-radius: 0.625rem;
      outline: none;
      cursor: pointer;
    }
  }
  .registerBtn {
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