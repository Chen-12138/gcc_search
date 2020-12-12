<template>
  <div class="inputPane">
    <div class="label" v-if="label">{{ label }}</div>
    <div class="input" :style="boderColor">
      <i v-if="leftIcon" :class="leftIcon" style="font-size: 1rem"></i>
      <input
        :type="type"
        :style="inputWidth"
        v-model="value"
        class="mui-input-password"
        :placeholder="placeholder"
        @blur="bluring"
        @input="sendMsg()"
      />
      <i
        v-if="rightIcon && value"
        :class="rightIcon"
        style="font-size: 1rem"
        @click="change"
      ></i>
      <p class="tip" v-if="showTip && tip">{{ message }}</p>
      <!-- fa fa-eye-slash,fa fa-eye,fa fa-envelope-o,fa fa-close (alias),fa fa-lock,fa fa-circle-o,fa fa-circle,fa fa-question-circle-o -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: this.inputData,
      showTip: false,
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    leftIcon: {
      type: String,
      default: "",
    },
    rightIcon: {
      type: String,
      default: "",
    },
    inputData: {
      type: String,
      default: "",
    },
    tip: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    sendMsg() {
      this.showTip = false;
      this.$emit("postInput", this.value);
    },
    bluring() {
      this.showTip = true;
    },
    change() {
      if (this.rightIcon == "fa fa-close (alias)") {
        this.value = "";
      }
      this.$emit("fun");
    },
  },
  computed: {
    inputWidth() {
      if (this.leftIcon && this.rightIcon && this.value) {
        return "width: 84%;";
      } else if (this.leftIcon || this.rightIcon) {
        return "width: 88%;";
      } else {
        return "width: 95%;";
      }
    },
    boderColor() {
      if (this.showTip && this.tip) {
        return "border:0.125rem red solid;";
      } else {
        return "border:0.125rem #a29273 solid;";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.inputPane {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.625rem 0;
  color: #755f34;
  .label {
    font-size: 1rem;
    width: 3.75rem;
  }
  .input {
    position: relative;
    height: 2.5rem;
    width: 80%;
    border-radius: 0.625rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input {
      font-size: 1rem;
      height: 93%;
      border: none;
      border-radius: 0.1875rem;
      outline: none;
    }
    .tip {
      position: absolute;
      left: 5%;
      bottom: -1.125rem;
      color: red;
      font-size: 0.875rem;
    }
  }
}
</style>