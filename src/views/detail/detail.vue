<template>
  <div id="detail">
    <header>
      <div class="return-btn">返回</div>
    </header>
    <main>
      <div class="head">
        <header>
          <p>标题</p>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </header>
        <section>这里似乎是放一个图？</section>
      </div>
      <div class="recommend">
        <section>
          <div class="recommend-head">诗词描述</div>
          <article>放置描述信息</article>
        </section>
        <section>
          <div class="recommend-head">元素寓意</div>
          <article>放置描述信息</article>
        </section>
        <section>
          <div class="recommend-head">基本信息</div>
          <article>
            <div class="double-col-box">
              <div class="col">
                <p>xxx</p>
                <p>xxxx</p>
                <p>xxxx</p>
              </div>
              <div class="col">
                <p>xxx</p>
                <p>xxx</p>
                <p>xxxxxxxx</p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <div class="recommend-head">边饰元素</div>
          <article>
            <div class="double-col-box">
              <div class="col">
                <p>xxx</p>
                <p>xxxx</p>
                <p>xxxx</p>
              </div>
              <div class="col">
                <p>xxx</p>
                <p>xxx</p>
                <p>xxxxxxxxxx</p>
              </div>
            </div>
          </article>
        </section>
      </div>
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
#detail {
  background-image: url("../../assets/images/background/home.jpg");
  text-align: left;
  color: white;
  header {
    .return-btn {
      width: fit-content;
      background: rgba(255, 255, 255, 0.3);
      padding: 0.2rem 1.5rem;
      border-radius: 1rem;
      margin: 0 max(5vw, 0.5rem);
    }
  }
  main {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    border-radius: 10px;
    background: rgba(255, 60, 0, 0.3);
    .head {
      header {
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
      }
      section {
        width: 60vw;
        height: 60vw;
        border: 1px solid white;
        margin: 1rem auto;
      }
    }
    .recommend {
      section {
        .recommend-head {
          width: fit-content;
          padding: 0.3rem 1rem;
          background: rgba(159, 31, 28);
          border-radius: 1rem;
          border: 1px solid white;
        }
        article {
          margin: 0.5rem auto 1.5rem auto;
          text-align: center;
          .double-col-box {
            text-align: left;
            display: flex;
            .col {
              width: 50%;
              padding-left: 20%;
              overflow: hidden;
            }
            .col:nth-child(1) {
              padding-left: 30%;
            }
          }
        }
      }
    }
  }
}
</style>
