<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view/>
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
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    
    var refreshRem = function () {
      var clientWidth = win.innerWidth
                        || doc.documentElement.clientWidth
                        || doc.body.clientWidth;

      console.log(clientWidth)
      if (!clientWidth) return;
      var fz;
      var width = clientWidth;
      fz = 16 * width / 375;
      docEl.style.fontSize = fz + 'px';//这样每一份也是16px,即1rem=16px
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, refreshRem, false);
    doc.addEventListener('DOMContentLoaded', refreshRem, false);
    refreshRem();

  })(document, window);
import Header from "@/components/Header";
export default {
    components:{
        Header
    }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.page{
  padding-top:62px;
  position: absolute;
  top:0;
  width: 100%;
  z-index: 1;
  background-position: center;
  background-size: cover;
}
</style>
