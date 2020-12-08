<template>
  <header id="header">
    <div class="wrapper">
      <div class="menu"  @click="link">
        <div class="menu-icon">
          <i class="fa fa-align-justify" aria-hidden="true"></i>
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/images/ci.png" id="imageCi" />
      </div>
      <div class="main-container">
        <i class="fa fa-search" aria-hidden="true"></i>
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
    </div>
    <p>Catonese color culture</p>
  </header>
</template>

<script>
export default {
  name: "",
  data(){
   return{
     open:false
   }
  },
  props: {
    title: {
      type: String,
      default: "粤彩文化",
    },
  },
  methods:{
    link(){
      this.$router.push({
        path:"explorer"
      })
    }
  }
};
</script>

<style scoped lang="scss">
#header {
  width: 100%;
  height:62px;
  padding: 0 1.8rem;
  color: #fff;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;

  padding-bottom: 2px;
  .wrapper {
    width: 100%;
    height:calc(100% - 1rem);
    display: flex;
    align-items: flex-end;
    .menu {
      width: 60px;
      text-align: left;
    }
    .image-container {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      img {
        width: 45px;
        height: 43px;
        object-fit: cover;
      }
    }
    .main-container {
      display: flex;
      justify-content: space-between;
      width: 60px;
    }
  }
  p{  
      font-size: 1rem;
      transform: scale(0.5) translateY(-1rem);
  }
}
</style>