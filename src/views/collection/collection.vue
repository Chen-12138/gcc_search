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
        <div class="photo"><img src="@/assets/images/盘子1.png" alt="" /></div>
        <article>
          <h1>
            "彩筆為針，丹青作線，縱橫交織針針見
            不需緞錦繡春圖，春花飛上銀瓷面。"
          </h1>
          <h2>
            广彩所用色料不拘一格，有古彩、粉彩、琅彩、新彩
            和自制与兼用的等等。所用色料有厚的、薄的、透明的、
            不透明的、半透明的、光亮的、哑光的。
          </h2>
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
          <div class="item-wrapper">
            <div
              class="sort-item"
              v-for="item in list"
              :key="item.key"
              @click="go(item)"
            >
              <img src="@/assets/images/bk.png" alt />
              <p>{{ item }}</p>
            </div>
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
        ["杯", "蛊", "壶", "罐"],
        ["盆", "尊", "碟", "瓷"],
      ],
    };
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

<style lang="scss" scoped>
#collection {
  background-image: url("../../assets/images/background/home.jpg");
  color: white;
  font-size: 1rem;
  header {
    $height: 2.5rem;
    margin: 1rem auto 0.5rem auto;
    width: fit-content;
    position: relative;
    width: 110px;
    height: $height;
    line-height: $height;
    img {
      position: absolute;
      width: 1.25rem;
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
        transform: translate(calc(-100% - 0.625rem), -50%);
      }
      &:nth-child(6) {
        right: 0;
        top: 50%;
        transform: translate(calc(100% + 0.625rem), -50%);
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
      margin: 1rem 1rem 1.5rem 1rem;
      padding-top: 1rem;
      .photo {
        img {
          width: 10.75rem;
          object-fit: cover;
          background: rgba(197, 123, 107, 0.8);
          border-radius: 0.625rem;
        }
      }
      h1,
      h2 {
        text-align: left;
        color: rgba(253, 253, 253, 0.7);
        margin-left: max(0.625rem, 4vw);
      }
      h1 {
        font-size: 0.9375rem;
        margin-bottom:max(0.625rem, 1vh);
      }
      h2 {
        font-size: 0.75rem;
      }
    }
    section {
      .sort-header {
        margin-bottom: 1.4375rem;
        text-align: left;
        display: flex;
        align-items: center;
        img {
          width: 1.125rem;
          height: 1.125rem;
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
            width: 1.25rem;
            height: 0.625rem;
            object-fit: cover;
            transform: rotate(90deg);
          }
          .sort-item {
            width: 25%;
            display: flex;
            align-items: center;

            p {
              font-size: 1rem;
              width: 3.75rem;
              height: 2rem;
              line-height: 1.875rem;
              border-radius: 0.3125rem;
              border: 1px solid white;
            }
          }
        }

        .clip-bar {
          width: 100%;
          height: 1.3rem;
          // background-image:url("../../assets/images/fenge.png");
          background-size: contain;
          margin-top: 0.6875rem;
          margin-bottom: 0.4375rem;
        }
      }
    }
  }
}
</style>
