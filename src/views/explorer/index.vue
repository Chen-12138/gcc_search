<template>
  <div id="explorer">
    <main>
      <ul>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
            <router-link :to="{path:'home'}">首页</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
               <router-link :to="{path:'collection'}">藏品</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
             <router-link :to="{path:'home'}">历史</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
               <router-link :to="{path:'home'}">名家大师</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
               <router-link :to="{path:'home'}">文创</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
               <router-link :to="{path:'home'}">资讯</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
      </ul>
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
#explorer {
  background-image: url("../../assets/images/background/home.jpg");
  height: 100vh;
  color: white;
  main {
    background: rgba(255, 60, 0, 0.3);
    .item {
      display: flex;
      align-items: center;
      height:50px;
      font-size:1.2rem;
      .item-icon {
        img {
          width: 16px;
          object-fit: cover;
        }
      }
      .item-header-main {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(167, 67, 47);
        margin-left:5px;
        padding-bottom:2px;
        a {
          margin-left: 10px;
        }
        img {
          width: 1.5rem;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
