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
                    <img :src="item.photo" alt="">
                </div>
                <div class="text">
                    <div class="title">
                        {{item.title}} 
                        <!-- 《从广彩瓷器看海丝路上的粤商》  何东红  -->
                    </div>
                    <div class="main">
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
        }
    },
    mounted(){
        this.getAcademic();
    },
    methods:{
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
                this.total = res.data.data.total - 4
                // 存储收藏信息
                this.likeStatus = []
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
    }
}
</script>

<style lang="scss" scoped>
#academic{
    background-image: url('../../../assets/images/background/学术_学术.jpg');
    .title{
        display: flex;
        height: 32.5px;
        font-size: 18px;
        font-weight: 500;
        // color: #ECECE3;
        font-family: Source Han Sans CN;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 23px;
        .left,.right{
            display: flex;
            flex-direction: column;
            margin: 0 10px;
        }
        .img1,.img6{
            width: 20px;
            height: 10px;
        }
        .img2,.img4{
            margin-bottom: 1px;
        }
        .img2,.img3,.img4,.img5{
            width: 15px;
            height: 15px;
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
            width: 340px;
            // height: 515px;
            background: rgba(#a44344, 0.55);
            border-radius: 10px;
            margin-bottom: 30px;
            padding-bottom: 15px;
            .flower{
                margin-top: 18px;
                margin-bottom: 5px;
                width: 18px;
                height: 20px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .photo{
                width: 304px;
                height: 195px;
                border: 1px dashed #fff;
                border-radius: 10px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                .title{
                    width: 280px;
                    text-align: left;
                    // margin-top: 14px;
                    // margin-bottom: 18px;
                    font-size: 16px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #E6E6E6;
                    padding-top: 35px;
                    padding-bottom: 30px;
                }
                .main{
                    width: 282px;
                    text-align: justify;
                    font-size: 15px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #E6E6E6;
                    line-height: 20px;
                    p{
                        font-size: 14px;
                    }
                }
            }
            .star{
                position: absolute;
                right: 8px;
                bottom: 4px;
                text-align: right;
                .fa-star-o{
                    margin-right: 6px;
                    margin-bottom: 4px;
                    color: #c7b49b;
                    font-size: 24px;
                }
                .fa-star{
                    margin-right: 6px;
                    margin-bottom: 4px;
                    color: #c7b49b;
                    font-size: 24px;
                }
            }
        }
    }
}

</style>