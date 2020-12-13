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
            <router-link :to="{name:'名家大师'}">名家大师</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
               <router-link :to="{path:'culturalProduction/production'}">文创产品</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
               <router-link :to="{path:'culturalProduction/game'}">文创游戏</router-link>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
               <router-link :to="{path:'news/academic'}">学术</router-link>
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
  methods: {
     go(name) {
      this.$router.push({
        name: "搜索结果",
        query: {
          keyword: name,
        },
      });
    },
  },
};
</script>

<style lang='scss' scoped>
#explorer {
  background-image: url("../../assets/images/background/home.jpg");
  height: 100vh;
  color: white;
  main {
    background: rgba(182, 71, 53, 0.3);
    border-radius: 10px;
     padding:0 max(1vw,0.5rem);
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
