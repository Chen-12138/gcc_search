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
        <van-image v-if="detail.photos !== undefined" :src="detail.photos[0]" class="img" @click="handleImagePreview">
            <template v-slot:loading style=font-size:1.5rem;>
                <!-- <van-loading type="spinner" size="20" /> -->
                加载中...
            </template>
            <template v-slot:error>加载失败</template>
        </van-image>
        <!-- <img :src="detail.photos[0]" alt=""> -->
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
import { ImagePreview } from 'vant'
export default {
  data(){
    return{
      // 藏品id
      id: 1,
      // 藏品详情
      detail: {},
      // 收藏状态
      likeStatus: false,
      // 图片预览数组
      srcList:[]
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
    // 处理图片放大预览
    handleImagePreview(){
      ImagePreview({
        images:[
          ...this.srcList
        ],
        closeable:true
      })
    },
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
            this.srcList = this.detail.photos
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
    margin: 0 0.625rem;
    border-top: 0.0625rem solid #e2a995;
    margin-bottom: 0.4375rem;
    .return_back{
      margin-top: 0.8125rem;
      margin-left: 0.4063rem;
      width: 3.8438rem;
      height: 1.375rem;
      background: #d99a82;
      border-radius: 0.625rem;
      span{
        color: #f9e3d7;
        font-size: 0.75rem;
        line-height: 1.375rem;
      }
    }
  }
  .main{
    margin: 0 auto;
    margin-bottom: 2.5rem;
    padding-bottom: 1.25rem;
    width: 22.2813rem;
    background: rgba(#a44344, 0.55);
    border-radius: 0.625rem;
    color: #EDCAB2;
    font-size: 0.75rem;
    .head{
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;
      padding-left: 1.1563rem;
      padding-right: 0.4375rem;
      margin-bottom: 2.5rem;
      span{
        color: #fff;
        font-size: 1.125rem;
      }
      .star{
          text-align: right;
          margin-right: 8px;
          .fa-star-o{
              color: #e6e6e6;
              font-size: 22px;
          }
          .fa-star{
              color: #fbae17;
              font-size: 22px;
          }
      }
    }
    .photo{
      width: 14.375rem;
      height: 14.375rem;
      border: 0.0625rem solid#eec4b2;
      border-radius:0.25rem;
      margin: 0 auto;
      margin-bottom: 0.875rem;
      overflow: hidden;
      .img{
        height: 100%;
        width: 100%;
        ::v-deep img{
          object-fit: cover;
        }
      }
    }
    .btn{
      margin-left: 0.75rem;
      margin-bottom: 0.8438rem;
      width: 5.3125rem;
      height: 2.0313rem;
      background: #9f1f1c;
      border-radius: 0.5rem;
      border: 0.0625rem solid#eec4b2;
      font-size: 0.8106rem;
      line-height: 2.0313rem;
      color: #eec4b2;
    }
    .poemDesc{
      .desc{
        margin-bottom: 1.25rem;
      }
    }
    .mean{
      .meaning{
        margin-bottom: 1.25rem;
      }
    }
    .baseInfo{
      margin-bottom: 0.7813rem;
      .info{
        .row{
          display: flex;
          // border-bottom: 0.0521rem dashed #EDCAB2;
          .con-item{
            margin: 0 auto;
            margin-left: 3.125rem;
              // width: 28.125rem;
              height: 1.875rem;
              display: flex;
              .title{
                  text-align: center;
                  width: 6.9792rem;
                  height: 1.875rem;
                  margin-right: 0.9896rem;
                  font-size: 0.75rem;
                  line-height: 1.9271rem;
                  // font-weight: 600;
              }
              .content{
                  width: 9.375rem;
                  height: 1.875rem;
                  text-align: left;
                  // font-weight: 600;
                  font-size: 0.75rem;
                  line-height: 1.875rem;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
              }
          }
          .item-right{
              margin-left: 1.3542rem;
          }
      }
      }
    }
    .pattern{
      .yuansu{
        .row{
          display: flex;
          // border-bottom: 0.0521rem dashed #EDCAB2;
          .con-item{
            margin: 0 auto;
            margin-left: 3.125rem;
              // width: 28.125rem;
              height: 1.875rem;
              display: flex;
              .title{
                  text-align: center;
                  width: 6.9792rem;
                  height: 1.875rem;
                  margin-right: 0.9896rem;
                  font-size: 0.75rem;
                  line-height: 1.9271rem;
                  // font-weight: 600;
              }
              .content{
                  width: 9.375rem;
                  height: 1.875rem;
                  text-align: left;
                  // font-weight: 600;
                  font-size: 0.75rem;
                  line-height: 1.875rem;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
              }
          }
          .item-right{
              margin-left: 1.3542rem;
          }
      }
      }
    }
  }
}
</style>