<template>
  <div id="academic">
        <div class="title">
            <img class="img1" src="@/assets/images/bk.png" alt="">
            <div class="left">
                <img class="img2" src="@/assets/images/角.png" alt="">
                <img class="img3" src="@/assets/images/角.png" alt="">
            </div>
            <span>学术</span>
            <div class="right">
                <img class="img4" src="@/assets/images/角.png" alt="">
                <img class="img5" src="@/assets/images/角.png" alt="">
            </div>
            <img class="img6" src="@/assets/images/bk.png" alt="">
        </div>
        <div class="content">
            <div class="item" v-for="(item,index) in academicList" :key="item.academicId"
            :id="item.academicId"
            >
                <div class="flower">
                    <img src="@/assets/images/hua.png" alt="">
                </div>
                <div class="photo">
                    <van-image :src="item.photo" class="img" @click="handleImagePreview(index)">
                        <template v-slot:loading style=font-size:24px;>
                            <!-- <van-loading type="spinner" size="20" /> -->
                            加载中...
                        </template>
                        <template v-slot:error>加载失败</template>
                    </van-image>
                    <!-- <img :src="item.photo" alt=""> -->
                </div>
                <div class="text">
                    <div class="title">
                        {{item.title}} 
                        <!-- 《从广彩瓷器看海丝路上的粤商》  何东红  -->
                    </div>
                    <div class="main">
                        <div class="btn" @click="getDownload(item.academicId,item.title)">
                            <span>下载</span>
                        </div>
                        <span class="zhaiyao">摘要：</span>
                        <p class="neirong">
                            {{item.content}}
                        </p>
                    </div>
                </div>
                <div class="star">
                    <i v-if="!likeStatus[index]" class="fa fa-star-o" aria-hidden="true" @click="collect(item.academicId,index)"></i>
                    <i v-else class="fa fa-star" aria-hidden="true" @click="collect(item.academicId,index)"></i>
                </div>
            </div>
        </div>
        <Pagination :total="total" :display="pageSize" :current="page" @pagechange="pagechange" :pagegroup=5></Pagination>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import {scrollTo} from '@/utils/jump'
import Pagination from '@/components/Pagination.vue'
export default {
    components:{
        Pagination
    },
    data(){
        return{
            // 跳转过来的id
            id: 5,
            // 总数据数
            total:0,
            // 当前页数
            page: 1,
            // 页面容量
            pageSize:2,
            // 学术文献
            academicList: [],
            // 储存收藏状态
            likeStatus: [],
            // 图片预览数组
            srcList:[]
        }
    },
    async mounted(){
        if(this.$route.query.number){
            this.page = parseInt((this.$route.query.number-1)/this.pageSize) + 1
            this.id = this.$route.query.id
        } else if (this.$route.query.id){
            this.page = parseInt((this.$route.query.id-1)/this.pageSize) + 1
            this.id = this.$route.query.id
        }
        await this.getAcademic();
        scrollTo()
    },
    methods:{
        // 处理图片放大预览
        handleImagePreview(index){
            ImagePreview({
                images:[
                ...this.srcList
                ],
                closeable: true,
                startPosition: index,
            })
        },
        // 页数切换时
        pagechange(value){
            this.page = value
            this.getAcademic()
        },
        // 获取学术文献
        async getAcademic() {
            try {
                let res = await this.$http.Academic.getAcademic({
                    pageSize: this.pageSize,
                    page: this.page
                })
                // console.log(res)
                this.academicList = res.data.data.academicList
                // console.log(this.academicList)
                this.total = res.data.data.total
                // 存储收藏信息
                this.likeStatus = []
                this.srcList = []
                this.academicList.map(item => {
                    this.likeStatus.push(item.isCollected)
                    this.srcList.push(item.photo)
                })
                this.loading = false
            } catch(error) {
                console.log(error)
            }
        },
        // 调用收藏接口
        async getLike(id) {
            try {
                let res = await this.$http.Academic.getLike({
                    academicId: id
                })
            } catch(error) {
                console.log(error)
            }
        },
        // 收藏切换
        collect(id,index){
            this.getLike(id)
            this.$set(this.likeStatus,index,!this.likeStatus[index])
        },
        // 获取文献下载链接
        async getDownload(id,filename) {
            window.open('http://47.102.155.74:10808/color_porcelain/academic/download?academicId=' + id)
        },
    }
}
</script>

<style lang="scss">
#academic{
    background-image: url('../../../assets/images/background/AI手机端长图 学术-03.jpg');
    .title{
        display: flex;
        height: 2.0313rem;
        font-size: 1.125rem;
        font-weight: 500;
        // color: #ECECE3;
        font-family: Source Han Sans CN;
        justify-content: center;
        align-items: center;
        margin-top: 0.625rem;
        margin-bottom: 1.4375rem;
        .left,.right{
            display: flex;
            flex-direction: column;
            margin: 0 0.625rem;
        }
        .img1,.img6{
            width: 1.25rem;
            height: 0.625rem;
        }
        .img2,.img4{
            margin-bottom: 0.0625rem;
        }
        .img2,.img3,.img4,.img5{
            width: 0.9375rem;
            height: 0.9375rem;
            transform-origin: center;
        }
        .img2{
            transform: rotateY(180deg);
        }
        .img3{
            transform: rotateY(180deg);
            transform: rotateZ(180deg);
        }
        .img5{
            transform: rotateX(180deg);
        }
        
    }
    .content{
        .item{
            position: relative;
            display: flex;
            // justify-content: center;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            width: 21.25rem;
            // height: 32.1875rem;
            background: rgba(#a44344, 0.55);
            border-radius: 0.625rem;
            margin-bottom: 1.875rem;
            padding-bottom: 0.9375rem;
            .flower{
                margin-top: 1.125rem;
                margin-bottom: 0.3125rem;
                width: 1.125rem;
                height: 1.25rem;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .photo{
                width: 19rem;
                height: 12.1875rem;
                // border: 0.0625rem dashed #fff;
                border-radius: 0.625rem;
                overflow: hidden;
                .img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                .title{
                    width: 17.5rem;
                    text-align: left;
                    // margin-top: 0.875rem;
                    // margin-bottom: 1.125rem;
                    font-size: 1rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #E6E6E6;
                    padding-top: 2.1875rem;
                    padding-bottom: 1.875rem;
                }
                .main{
                    position: relative;
                    width: 17.625rem;
                    text-align: justify;
                    font-size: 0.9375rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #E6E6E6;
                    line-height: 1.25rem;
                    .btn{
                        position: absolute;
                        top: -6px;
                        right: 0;
                        width: 60px;
                        height: 25px;
                        // background: rgba(#9f1f1c, 0.55);
                        background: #9f1f1c;
                        border-radius: 6px;
                        border: 1px soli#E6E6E6;
                        display: flex;
                        font-size: 12px;
                        justify-content: center;
                        align-items: center;
                    }
                    p{
                        font-size: 0.875rem;
                    }
                }
            }
            .star{
                position: absolute;
                right: 0.5rem;
                bottom: 0.25rem;
                text-align: right;
                .fa-star-o{
                    margin-right: 0.375rem;
                    margin-bottom: 0.25rem;
                    color: #c7b49b;
                    font-size: 1.5rem;
                }
                .fa-star{
                    margin-right: 0.375rem;
                    margin-bottom: 0.25rem;
                    color: #c7b49b;
                    font-size: 1.5rem;
                }
            }
        }
    }
    .prev,.next{
        padding: 0.5rem 1.125rem;
        height: 1.5625rem;
        border-radius: 1.25rem;
        background: #8d4633;
        font-size: 0.625rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #F9E3D7;
        line-height: 0.4688rem;
    }
}
</style>