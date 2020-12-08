<template>
  <header id="header">
    <div class="wrapper">
      <div class="menu"  @click="openMenu">
        <div class="menu-icon">
          <i class="fa fa-align-justify" aria-hidden="true"></i>
        </div>
        <div v-if="open" class="menu-main">
         <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
         </ul>
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
    openMenu(){
        this.open=!this.open;
    }
  }
};
</script>

<style scoped lang="scss">
#header {
  width: 100%;
  height: 80px;
  padding: 0 1.8rem;
  color: #fff;
  background: #e54847;
  font-size: 1.7rem;
  position: relative;
  .wrapper {
    width: 100%;
    height:calc(100% - 1rem);
    display: flex;
    align-items: flex-end;
    .menu {
      width: 60px;
      text-align: left;
      .menu-main{
          position: absolute;
          top:100%;
          left:0;
          background: #f09292;
          width:80%;
          li{
              border-bottom: 1px rgba(255, 255, 255, 0.3) solid;
          }
        
      }
    }
    .image-container {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      img {
        width: 68px;
        height: 64px;
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