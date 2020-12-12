<template>
  <div id="detail">
    <div class="title">
      <div class="return_back"><span>返回</span></div>
    </div>
    <div class="main">
      <div class="head">
        <span class="name">标题</span>
        <div class="star">
            <i class="fa fa-star-o" aria-hidden="true" @click="collect(item.gameId,index)"></i>
            <!-- <i  aria-hidden="true" @click="collect(item.gameId,index)"></i> -->
        </div>
      </div>
      <div class="photo">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#detail{
  background-image: url("../../assets/images/background/home.jpg");
  .title{
    margin: 0 10px;
    border-top: 1px solid #e2a995;
    margin-bottom: 7px;
    .return_back{
      margin-top: 13px;
      margin-left: 6.5px;
      width: 61.5px;
      height: 22px;
      background: #d99a82;
      border-radius: 10px;
      span{
        color: #f9e3d7;
        font-size: 12px;
        line-height: 22px;
      }
    }
  }
  .main{
    margin: 0 auto;
    width: 356.5px;
    height: 500px;
    background: rgba(#a44344, 0.55);
    border-radius: 10px;
    .head{
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      padding-left: 18.5px;
      padding-right: 7px;
      margin-bottom: 40px;
      span{
        color: #fff;
        font-size: 18px;
      }
      .star{
          text-align: right;
          margin-right: 0.5rem;
          .fa-star-o{
              color: #e6e6e6;
              font-size: 1.375rem;
          }
          .fa-star{
              color: #fbae17;
              font-size: 1.375rem;
          }
      }
    }
    .photo{

    }
  }
}
</style>