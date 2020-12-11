<template>
  <div id="user">
    <div id="userInfo">
      <div id="headPortrait">
        <img src="@/assets/images/leaf.png" alt="" />
      </div>
      <div class="main-info">
        <div class="info-item">ID号: {{ userInfo.id }}</div>
        <div class="info-item">账号: {{ userInfo.accounts }}</div>
      </div>
    </div>
    <main>
      <div id="collection" ref="collection">
        <ul @click="choiceCollection">
          <img src="@/assets/images/bk.png" alt />
          <li class="collection-head head-0">学术收藏</li>
          <img src="@/assets/images/bk.png" alt />
          <li class="collection-head head-1">文创收藏</li>
          <img src="@/assets/images/bk.png" alt />
          <li class="collection-head head-2">探索收藏</li>
          <img src="@/assets/images/bk.png" alt />
        </ul>
        <div id="collectionContainer">
          <!-- <slideshow
            :slideshowData="slideshowData"
            @nextPage="nextPage"
            v-if="slideshowData.length != 0"
          ></slideshow>
          <p v-else class="warning">这里空空如也,甚至还长了草.......</p> -->
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div id="foot">
        <div class="foot-head">
          <img src="@/assets/images/hua-black.png" alt />
          <p>我的足迹</p>
        </div>
        <div class="foot-main">
          <table>
            <tr>
              <th>标题</th>
              <th>所属项目</th>
              <th>访问时间</th>
            </tr>
            <tr>
              <td>xx</td>
              <td>xx</td>
              <td>xx</td>
            </tr>
            <tr>
              <td>xx</td>
              <td>xx</td>
              <td>xx</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "",
  data() {
    return {
      userInfo: {
        headPortrait: "",
        id: "a1163675107",
        accounts: "某时橙",
      },
    };
  },
  components: {},
  mounted() {
    let swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  methods: {
    choiceCollection(e) {
      let r = null;
      if (e.target.className) {
        r = e.target.className.match(/head-\d/)[0];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#user {
  background-image: url("../../assets/images/background/user.jpg");
  min-height: 100vh;
  color: rgba(108, 83, 64, 1);
  #userInfo {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 30px auto 15px auto;
    #headPortrait {
      border: 1px solid rgba(164, 67, 68, 0.3);
      border-radius: 50%;
      padding: 10px;
      img {
        object-fit: cover;
        width: 57px;
        height: 57px;
      }
    }
    .main-info {
      text-align: left;
      margin-left: max(5px, 5vw);
      .info-item {
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
        margin-bottom: max(5px, 1vh);
        min-width: 150px;
        background: rgba(232, 231, 220, 1);
        border-radius: 1rem;
      }
    }
  }
  main {
    background: rgba(255, 255, 255, 0.6);
    padding-top: 18px;
    border-radius: 10px;
    min-height: 60vh;
    #collection {
      color: white;
      margin-bottom: 1rem;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 0 8px;
        #selectbar {
          position: absolute;
          left: 0;
          bottom: -1px;
          background: #a44344;
          width: 4rem;
          height: 1px;
        }
        .collection-head {
          background: rgba(154, 141, 112);
          padding: 0.2rem 0.5rem;
          border-radius: 10px;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        img {
          width: 20px;
          object-fit: cover;
          // align-self: flex-end;
        }
      }
    }
    .swiper-container {
      width: calc(100% - 30px);
      height: 67px;
    }
    .swiper-slide {
      border-radius: 10px;
      text-align: center;
      font-size: 18px;
      background: linear-gradient(rgba(227, 193, 154), rgba(179, 167, 141));
    }
  }
  #foot {
    margin: 20px 0;
    .foot-head {
      display: flex;
      text-align: left;
      border-bottom: 1px solid white;
      margin-bottom: 10px;
      padding-bottom: 3px;
      img {
        margin-right: max(10px, 1vw);
        width: 1.3rem;
        object-fit: cover;
      }
    }
    .foot-main {
      width: 100%;
      table {
        width: 100%;
      }
      th {
        color: rgba(108, 83, 64, 0.5);
      }
    }
  }
}
</style>
