<template>
  <div id="app" class="main">
    <Header id="header" class="content"></Header>
    <router-view />
  </div>
</template>

<script>
/**
      * ================================================
      *   设置根元素font-size
      * 当设备宽度为375(iPhone6)时，根元素font-size=16px; 
      × ================================================
      */
(function (doc, win) {
  var docEl = win.document.documentElement;
  var resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";

  var refreshRem = function () {
    var clientWidth =
      win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;

    console.log(clientWidth);
    if (!clientWidth) return;
    var fz;
    var width = clientWidth;
    fz = (16 * width) / 375;
    docEl.style.fontSize = fz + "px"; //这样每一份也是16px,即1rem=16px
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener("DOMContentLoaded", refreshRem, false);
  refreshRem();
})(document, window);
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  created() {
    let count = 0;
    //究极暴力跳转
    let id = setInterval(() => {
      this.$router.push({ path: "/login" });
      if (this.$router.options.routes[0].path.match("/login") != null) {
        clearInterval(id);
      }
      if (count++ == 20) {
        clearInterval(id);
      }
    }, 50);
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
