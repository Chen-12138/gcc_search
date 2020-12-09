<template>
  <div id="collection">
    <header>
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/角.png" alt />
      <img src="@/assets/images/bk.png" alt />
      <img src="@/assets/images/bk.png" alt />
      <p>藏品</p>
    </header>
    <main>
      <div class="recommand">
        <div class="photo">图</div>
        <article>
          <h1>彩笔————</h1>
          <h2>广彩——</h2>
        </article>
      </div>
      <section>
        <div class="sort-header">
          <p>藏品分类</p>
        </div>
        <div
          class="sort-item-container"
          v-for="list in sortItem"
          :key="list.key"
        >
          <div class="item-wrapper" >
            <div class="sort-item" v-for="item in list"  :key="item.key">
              <img src="@/assets/images/bk.png" alt />
              <p>{{item}}</p>
            </div>
            <img src="@/assets/images/bk.png" alt />
          </div>
          <div class="clip-bar"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      sortItem: [
        ["瓶", "盘", "碟", "瓷"],
        ["瓶", "盘", "碟", "瓷"],
        ["瓶", "盘", "碟", "瓷"],
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#collection {
  background-image: url("../../assets/images/background/home.jpg");
  height: 100vh;
  color: white;
  header {
    $height: 40px;
    margin: 1rem auto 0.5rem auto;
    width: fit-content;
    position: relative;
    width: 110px;
    height: $height;
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
        left: 0;
        top: 50%;
        transform: translate(calc(-100% - 10px), -50%);
      }
      &:nth-child(6) {
        right: 0;
        top: 50%;
        transform: translate(calc(100% + 10px), -50%);
      }
    }
    p {
      font-size: 1.4rem;
    }
  }
  main {
    background: rgba(255, 60, 0, 0.3);

    .recommand {
      display: flex;
      margin: 16px 16px 24px 16px;
      padding-top:16px;
      .photo {
        width: 172px;
        height: 172px;
        border-radius: 10px;
        background: rgba(197, 123, 107, 0.8);
      }
      h1,
      h2 {
        text-align: left;
        color: rgba(253, 253, 253, 0.7);
        margin-left: max(10px, 4vw);
      }
      h1 {
        font-size: 15px;
      }
      h2 {
        font-size: 12px;
      }
    }
    section {
      .sort-header {
        margin-bottom:23px;
        text-align: left;
        display: flex;
        align-items: center;
        img {
          width: 18px;
          height: 18px;
        }
        p {
          font-size: 1.2rem;
          margin-left: max(5px, 2vw);
        }
      }
      .sort-item-container {
        width: 100%;
        .item-wrapper {
          display: flex;
          width: 100%;
          align-items: center;
          img {
            width: 20px;
            height: 10px;
            object-fit: cover;
            transform: rotate(90deg);
          }
          .sort-item {
            width: 25%;
            display: flex;
            align-items: center;

            p {
            
              width: 60px;
              height: 32px;
              line-height: 30px;
              border-radius: 5px;
              border: 1px solid white;
            }
          }
        }

        .clip-bar {
          width: 100%;
          height: 13px;
          // background: url("../../assets/images/bk-2.png");
          background: rgba(253, 253, 253, 0.7);
          margin-top:11px;
          margin-bottom:7px;
        }
      }
    }
  }
}
</style>
