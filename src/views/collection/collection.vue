<template>
  <div id="collection">
    <header>
      <img src="@/assets/images/角.png" alt="" />
      <img src="@/assets/images/角.png" alt="" />
      <img src="@/assets/images/角.png" alt="" />
      <img src="@/assets/images/角.png" alt="" />
      <img src="@/assets/images/bk.png" alt="" />
      <img src="@/assets/images/bk.png" alt="" />
      <p>藏品</p>
    </header>
    <main>
        <div class="recommand">
            <div class="photo"> 图</div>
            <article>
                <h1>文字一</h1>
                <h2>文字二</h2>
            </article>
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
#collection {
  background-image: url("../../assets/images/background/home.jpg");
  height: 100vh;
  header {
    $height:40px;
    margin:1rem auto 0.5rem auto;
    width: fit-content;
    position: relative;
    width: 110px;
    height:$height;
    line-height: $height;
    img {
      position: absolute;
      width: 20px;
      object-fit: cover;
      &:nth-child(1) {
        top: 0;
        left: 0;
        transform: rotateZ(-90deg);
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
        transform: rotateZ(180deg);
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
        transform: rotateZ(90deg);
      }
        &:nth-child(5) {
        left:0;
        top:50%;
        transform: translate(calc(-100% - 10px),-50%);
      }
      &:nth-child(6) {
        right:0;
        top:50%;
        transform: translate(calc(100% + 10px),-50%);
      }
    }
    p{
        font-size:1.4rem;
        color:white;
    }
  }
  main{
      background: rgba(255, 60, 0, 0.3);
      
      .recommand{
          display: flex;
          .photo{
              width:40%
          }
      }
  }
}
</style>