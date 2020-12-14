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
          <div
            class="swiper-slide"
            v-for="(item, index) in collectionData.itemData[
              collectionData.index
            ]"
            :key="item.key"
          >
            <img
              :src="item.imgUrl"
              @click="
                link(collectionData.itemData[collectionData.index][index])
              "
            />
          </div>
          <p v-if="collectionData.itemData[collectionData.index].length == 0">
            这里还空空如也，甚至生了草
          </p>
        </div>
      </div>
      <div id="foot">
        <div class="foot-head">
          <img src="@/assets/images/hua-black.png" alt />
          <p>我的足迹</p>
        </div>
        <div class="foot-main">
          <table cellspacing="5">
            <tr>
              <th>标题</th>
              <th>所属项目</th>
              <th>访问时间</th>
            </tr>
            <tr
              v-for="(item, index) in FootData"
              :key="item.key"
              @click="link(FootData[index])"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.project }}</td>
              <td>{{ item.date }}</td>
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
import { linkTo } from "@/utils/jump.js";
export default {
  name: "",
  data() {
    return {
      userInfo: {
        headPortrait: "",
        id: "用户",
        accounts: "未定义用户名",
      },
      FootData: [],
      footPage: 1,
      total: null,
      collectionData: {
        itemData: [[], [], []],
        page: [0, 0, 0], //标记第几页
        index: 0, //对应三种收藏中的一种
      },
    };
  },
  components: {},
  async mounted() {
    this.getRecord();
    await this.getCollectionInfo();
    //发现一个bug,如果用户窗口更改的话，可能会导致swiper难以滑动
    let mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      updateTranslate: true,
      onSlideChangeEnd: function (swiper) {
        swiper.update();
        mySwiper.startAutoplay();
        mySwiper.reLoop();
      },
      on: {
        resize: function () {
          this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
        },
      },
    });
    let userInfo = JSON.parse(sessionStorage.getItem("user")) ||JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      this.userInfo.accounts = userInfo.email;
      this.userInfo.id = "用户" + userInfo.email.slice(0, 3);
    }
  },
  methods: {
    link: function (data) {
      linkTo.call(this, data.type, {
        id: data.id,
      });
    },
    choiceCollection(e) {
      let r = null;
      if (e.target.className) {
        r = e.target.className.match(/head-\d/)[0];
      }
      switch (r) {
        case "head-0":
          this.collectionData.index = 0;
          break;
        case "head-1":
          this.collectionData.index = 1;
          break;
        case "head-2":
          this.collectionData.index = 2;
          break;
      }
      this.getCollectionInfo();
    },
    getCollectionInfo() {
      //还需要增加一个判断页数的逻辑
      let index = this.collectionData.index;
      let length = this.collectionData.itemData[index].length;
      if (Math.floor(length / 20) != this.collectionData.page[index]) return;
      this.collectionData.page[index]++;
      return this.$http.User["getCollection"]({
        page: this.collectionData.page[index],
        pageSize: 20,
        type: index,
      })
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          for (const item of data) {
            this.collectionData.itemData[index].push({
              imgUrl: item.photo,
              id: item.collectionId,
              rowNum: item.rowNum,
              type: item.type,
              rowNum: item.rowNum,
            });
          }
        })
        .catch((res) => {
          console.log("暂无数据");
        });
    },
    getRecord() {
      if (this.FootData[this.footPage]) return;
      return this.$http.User.getRecord({
        page: this.footPage,
        pageSize: 5,
      })
        .then((res) => {
          let data = res.data.data.recordList;
          this.total = res.data.data.total;
          let result = [];
          for (const item of data) {
            result.push({
              date: item.time,
              name: item.title,
              project: item.column,
              // url: null, //跳转的页面
              rowNum: item.rowNum,
              type: item.type,
              id: item.typeId,
            });
          }
          this.FootData = result;
        })
        .catch((res) => {
          console.log("暂无数据");
        });
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
    margin: 1.875rem auto 0.9375rem auto;
    #headPortrait {
      border: 1px solid rgba(164, 67, 68, 0.3);
      border-radius: 50%;
      padding: 0.625rem;
      img {
        object-fit: cover;
        width: 3.5625rem;
        height: 3.5625rem;
      }
    }
    .main-info {
      text-align: left;
      margin-left: 0.3125rem;
      // margin-left: max(0.3125rem, 5vw);
      .info-item {
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
        margin-bottom: 0.3125rem;
        // margin-bottom: max(0.3125rem, 1vh);
        min-width: 9.375rem;
        background: rgba(232, 231, 220, 1);
        border-radius: 1rem;
      }
    }
  }
  main {
    background: rgba(255, 255, 255, 0.6);
    padding-top: 1.125rem;
    border-radius: 0.625rem;
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
        padding: 0 0.5rem;
        #selectbar {
          position: absolute;
          left: 0;
          bottom: -0.0625rem;
          background: #a44344;
          width: 4rem;
          height: 0.0625rem;
        }
        .collection-head {
          min-width: 4.0625rem;
          background: rgba(154, 141, 112);
          padding: 0.3125rem;
          border-radius: 0.625rem;
          font-size: 0.5rem;
          letter-spacing: 0.0625rem;
        }
        img {
          width: 1.25rem;
          object-fit: cover;
          // align-self: flex-end;
        }
      }
    }
    .swiper-container {
      width: calc(100% - 1.875rem);
      height: 4.1875rem;
    }
    .swiper-slide {
      width: 6rem;
      margin-right: 0.625rem;
      border-radius: 0.625rem;
      text-align: center;
      font-size: 1.125rem;
      background: linear-gradient(rgba(227, 193, 154), rgba(179, 167, 141));
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.625rem;
      }
    }
  }
  #foot {
    margin: 1.25rem 0;
    font-size: 1rem;
    .foot-head {
      display: flex;
      text-align: left;
      border-bottom: 0.0625rem solid white;
      margin-bottom: 0.625rem;
      padding-bottom: 0.1875rem;
      align-items: center;
      img {
        margin-right: 0.625rem;
        margin-left: 0.5rem;
        width: 1.25rem;
        height: 1.3125rem;
      }
    }
    .foot-main {
      font-size: 0.5rem;
      width: 100%;
      table {
        width: 100%;
      }
      th {
        color: rgba(108, 83, 64, 0.5);
      }
      tr {
        margin-bottom: 0.625rem;
      }
    }
  }
}
</style>
