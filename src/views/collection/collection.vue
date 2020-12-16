<template>
  <div id="collection">
   <div class="title">
         <img src="../../assets/images/bk.png" alt="" class="border_img"/>
      <div class="left">
        <div class="left_top">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
        <div class="left_bottom">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
      </div>
      <div class="content">藏品</div>
      <div class="right">
        <div class="right_top">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
        <div class="right_bottom">
          <img src="@/assets/images/角.png" alt="" class="imgBox" />
        </div>
      </div>
       <img src="../../assets/images/bk.png" alt="" class="border_img"/>
    </div>
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
 .title {
    width: 55%;
    margin: 1.25rem auto 0.625rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
     .border_img {
      width: 1.25rem;
      object-fit: cover;
      margin: 0 0.9rem;
    }
    .imgBox {
      width: 1.25rem;
      height: 1.25rem;
    }
    .left {
      .left_top {
        transform: rotate(-90deg);
      }
      .left_bottom {
        transform: rotate(-180deg);
      }
    }
    .right {
      .right_top {
        transform: rotate(0deg);
      }
      .right_bottom {
        transform: rotate(90deg);
      }
    }
    .content {
      line-height: 1.5625rem;
      font-size: 1.5rem;
      color: #ecece3;
      font-weight: 500;
    }
  }
  main {
    background-image: linear-gradient(
      rgba(161, 35, 31, 0.2),
      rgba(161, 35, 31, 0.5)
    );
    .recommand {
      display: flex;
      margin: 1rem 1rem 1.5rem 1rem;
      padding-top: 1rem;
      .photo {
        img {
          width: 10.75rem;
          object-fit: contain;
          background: rgba(197, 123, 107, 0.8);
          border-radius: 0.625rem;
        }
      }
      h1,
      h2 {
        text-align: left;
        color: rgba(253, 253, 253, 0.7);
        margin-left: 0.625rem;
        // margin-left: max(0.625rem, 4vw);
      }
      h1 {
        font-size: 0.9375rem;
        margin-bottom: 0.625rem;
        // margin-bottom:max(0.625rem, 1vh);
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
          margin-left: 5px;
          // margin-left: max(5px, 2vw);
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
