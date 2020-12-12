<template>
  <div id="detail">
    <div class="back">
      <div class="return_back" @click="handleBack"><span>返回</span></div>
    </div>
    <div class="main">
      <div class="head">
        <span class="name">标题</span>
        <div class="star">
          <i v-if="!likeStatus" class="fa fa-star-o" aria-hidden="true" @click="collect()"></i>
          <i v-else class="fa fa-star" aria-hidden="true" @click="collect()"></i>
        </div>
      </div>
      <div class="photo">
        <img :src="detail.photos[0]" alt="">
      </div>
      <div class="poemDesc">
        <div class="btn">
          <span>诗词描述</span>
        </div>
        <div class="desc">
          别后相思鹤信稀，郡楼南望远峰迷
        </div>
      </div>
      <div class="mean">
        <div class="btn">
          <span>元素寓意</span>
        </div>
        <div class="meaning">
          长寿安康
        </div>
      </div>
      <div class="baseInfo">
        <div class="btn">
          <span>基本信息</span>
        </div>
        <div class="info">
          <div class="row">
            <div class="con-item item-left">
                <span class="title">档案名称</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.archives}}</span>
            </div>
            <!-- <div class="con-item item-right">
                <span class="title">斗方图案</span>
                <span>无</span>
                <span class="content">{{detail.pattern}}</span>
            </div> -->
          </div>
          <div class="row">
            <div class="con-item item-left">
                <span class="title">作品编号</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.number}}</span>
            </div>
            <!-- <div class="con-item item-right">
                <span class="title">边角间隙</span>
                <span>无</span>
                <span class="content">{{detail.interval}}</span>
            </div> -->
          </div>
          <div class="row">
            <div class="con-item item-left">
                <span class="title">器型类型</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.model}}</span>
            </div>
            <!-- <div class="con-item item-right">
                <span class="title">锦地图案</span>
                <span>无</span>
                <span class="content">{{detail.lightType}}</span>
            </div> -->
          </div>
          <div class="row">
            <div class="con-item item-left">
                <span class="title">器型</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.type}}</span>
            </div>
            <!-- <div class="con-item item-right">
                <span class="title">组织图案</span>
                <span>无</span>
                <span class="content">{{detail.organizeType}}</span>
            </div> -->
          </div>
          <div class="row">
            <div class="con-item item-left">
                <span class="title">历史</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.history}}</span>
            </div>
            <!-- <div class="con-item item-right">
                <span class="title">主要题材</span>
                <span>无</span>
                <span class="content">{{detail.matter}}</span>
            </div> -->
          </div>
        </div>
      </div>
      <div class="pattern">
        <div class="btn">
          <span>边饰元素</span>
        </div>
        <div class="yuansu">
          <div class="row">
            <!-- <div class="con-item item-left">
                <span class="title">档案名称</span>
                <span>无</span>
                <span class="content">{{detail.archives}}</span>
            </div> -->
            <div class="con-item item-left">
                <span class="title">斗方图案</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.pattern}}</span>
            </div>
          </div>
          <div class="row">
            <!-- <div class="con-item item-left">
                <span class="title">作品编号</span>
                <span>无</span>
                <span class="content">{{detail.number}}</span>
            </div> -->
            <div class="con-item item-left">
                <span class="title">边角间隙</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.interval}}</span>
            </div>
          </div>
          <div class="row">
            <!-- <div class="con-item item-left">
                <span class="title">器型类型</span>
                <span>无</span>
                <span class="content">{{detail.model}}</span>
            </div> -->
            <div class="con-item item-left">
                <span class="title">锦地图案</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.lightType}}</span>
            </div>
          </div>
          <div class="row">
            <!-- <div class="con-item item-left">
                <span class="title">器型</span>
                <span>无</span>
                <span class="content">{{detail.type}}</span>
            </div> -->
            <div class="con-item item-left">
                <span class="title">组织图案</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.organizeType}}</span>
            </div>
          </div>
          <div class="row">
            <!-- <div class="con-item item-left">
                <span class="title">历史</span>
                <span>无</span>
                <span class="content">{{detail.history}}</span>
            </div> -->
            <div class="con-item item-left">
                <span class="title">主要题材</span>
                <!-- <span>无</span> -->
                <span class="content">{{detail.matter}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 藏品id
      id: 1,
      // 藏品详情
      detail: {},
      // 收藏状态
      likeStatus: false,
    }
  },
  mounted(){
    if(this.$route.query.porcelainId){
        this.id = this.$route.query.porcelainId
    } else {
        this.id = this.$route.query.id
    }
    this.getDetail()
  },
  methods:{
    // 返回上一页
    handleBack(){
        this.$router.back()
    },
    // 获取某件藏品的详细信息以及推荐用户可能喜欢的藏品
    async getDetail() {
        try {
            let res = await this.$http.Detail.getDetail({
                porcelainId: this.id
            })
            this.detail = res.data.data
            this.likeStatus = this.detail.isCollected
            console.log(res);
        } catch(error) {
            console.log(error)
        }
    },
    // 调用收藏接口
    async getLike() {
        try {
            let res = await this.$http.Detail.getLike({
                porcelainId: this.id
            })
            // console.log(res)
        } catch(error) {
            console.log(error)
        }
    },
    // 点击收藏
    collect(){
      this.getLike()
      this.likeStatus = !this.likeStatus
    },
  }
}
</script>

<style lang="scss" scoped>
#detail{
  background-image: url("../../assets/images/background/home.jpg");
  .back{
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
    margin-bottom: 40px;
    padding-bottom: 20px;
    width: 356.5px;
    background: rgba(#a44344, 0.55);
    border-radius: 10px;
    color: #EDCAB2;
    font-size: 12px;
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
      width: 230px;
      height: 230px;
      border: 1px solid#eec4b2;
      border-radius: 10px;
      margin: 0 auto;
      margin-bottom: 12.5px;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .btn{
      margin-left: 12px;
      margin-bottom: 13.5px;
      width: 85px;
      height: 32.5px;
      background: #9f1f1c;
      border-radius: 8px;
      border: 1px solid#eec4b2;
      font-size: 12.97px;
      line-height: 32.5px;
      color: #eec4b2;
    }
    .poemDesc{
      .desc{
        margin-bottom: 20px;
      }
    }
    .mean{
      .meaning{
        margin-bottom: 20px;
      }
    }
    .baseInfo{
      margin-bottom: 12.5px;
      .info{
        .row{
          display: flex;
          // border-bottom: 0.8333px dashed #EDCAB2;
          .con-item{
            margin: 0 auto;
            margin-left: 50px;
              // width: 450px;
              height: 30px;
              display: flex;
              .title{
                  text-align: center;
                  width: 111.6667px;
                  height: 30px;
                  margin-right: 15.8333px;
                  font-size: 12px;
                  line-height: 30.8333px;
                  // font-weight: 600;
              }
              .content{
                  width: 150px;
                  height: 30px;
                  text-align: left;
                  // font-weight: 600;
                  font-size: 12px;
                  line-height: 30px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
              }
          }
          .item-right{
              margin-left: 21.6667px;
          }
      }
      }
    }
    .pattern{
      .yuansu{
        .row{
          display: flex;
          // border-bottom: 0.8333px dashed #EDCAB2;
          .con-item{
            margin: 0 auto;
            margin-left: 50px;
              // width: 450px;
              height: 30px;
              display: flex;
              .title{
                  text-align: center;
                  width: 111.6667px;
                  height: 30px;
                  margin-right: 15.8333px;
                  font-size: 12px;
                  line-height: 30.8333px;
                  // font-weight: 600;
              }
              .content{
                  width: 150px;
                  height: 30px;
                  text-align: left;
                  // font-weight: 600;
                  font-size: 12px;
                  line-height: 30px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
              }
          }
          .item-right{
              margin-left: 21.6667px;
          }
      }
      }
    }
  }
}
</style>