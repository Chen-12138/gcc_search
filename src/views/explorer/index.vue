<template>
  <div id="explorer" class="page">
    <main>
      <ul>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
            <p>首页</p>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
            <p>藏品</p>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
            <p>历史</p>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
            <p>名家大师</p>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
            <p>文创</p>
            <img src="@/assets/images/bk.png" />
          </div>
        </li>
        <li class="item">
          <div class="item-icon">
            <img src="@/assets/images/hua.png" id="hua" />
          </div>
          <div class="item-header-main">
            <p>资讯</p>
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
    margin: 0 max(5vw, 0.5rem);
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
        p {
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
