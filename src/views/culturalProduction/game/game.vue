<template>
  <div id="game" class="page">
    <div class="title">
        <div class="left">
            <img class="img2" src="@/assets/images/角.png" alt="">
            <img class="img3" src="@/assets/images/角.png" alt="">
        </div>
        <div class="wenchuang">
            <img src="@/assets/images/文創2.png" alt="">
            <span>游戏</span>
        </div>
        <div class="right">
            <img class="img4" src="@/assets/images/角.png" alt="">
            <img class="img5" src="@/assets/images/角.png" alt="">
        </div>
        <div class="line">
        </div>
    </div>
    <div class="content">
        <div
        :class="index%2? 'item-right' : 'item-left'"
        v-for="(item, index) in gameList" :key="item.gameId"
        :id="item.gameId"
        >
            <div class="main">
                <div class="top">
                    <div class="photo">
                        <a :href="item.url" target="_blank">
                            <img :src="item.photo" alt="">
                        </a>
                    </div>
                    <div class="text">
                        <div class="head">
                            {{item.name}}
                            <div class="star">
                                <i v-if="!likeStatus[index]" class="fa fa-star-o" aria-hidden="true" @click="collect(item.gameId,index)"></i>
                                <i v-else class="fa fa-star" aria-hidden="true" @click="collect(item.gameId,index)"></i>
                            </div>
                        </div>
                        <div class="body">
                            <span class="desc">
                                {{item.introduction}}
                            </span>
                            <div class="design">
                                <h2>
                                    设计说明：
                                </h2>
                                <span>
                                    {{item.design}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <h2>游戏玩法：</h2>
                    <span>
                        {{item.method}}
                    </span>
                </div>
            </div>
            <div class="flower" v-if="item.gameId%3 != 0">
                <img src="@/assets/images/hua.png" alt="">
            </div>
            <div class="point">
                <!-- <img src="@/assets/images/点2.png" alt=""> -->
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
                <div class="circle5"></div>
                <div class="circle6"></div>
                <div class="circle7"></div>
                <div class="circle8"></div>
            </div>
        </div>
    </div>
    <Pagination :total="total" :display="pageSize" :current="page" @pagechange="pagechange" :pagegroup=3></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
    components:{
        Pagination
    },
    data() {
        return{
            // 总数据数
            total:6,
            // 当前页数
            page: 1,
            // 显示
            pageSize:3,
            // 游戏数组
            gameList:[],
            // 储存收藏状态
            likeStatus: []
        }
    },
    mounted(){
        this.getGame();
        // console.log(this.gameList)
    },
    methods: {
        // 分页获取
        async getGame() {
            try {
                let res = await this.$http.Production.getGame({
                    page: this.page,
                    pageSize: this.pageSize
                })
                this.gameList = res.data.data
                // 存储收藏信息
                this.likeStatus = []
                this.gameList.map(item => {
                    this.likeStatus.push(item.isCollected)
                })
            } catch(error) {
                console.log(error)
            }
        },
        // 页数切换
        pagechange(idx){
            this.page = idx
			this.getGame()
        },
        // 调用收藏接口
        async getLike(id) {
            try {
                let res = await this.$http.Production.getGameLike({
                    gameId: id
                })
            } catch(error) {
                console.log(error)
            }
        },
        // 收藏切换
        collect(id,index){
            this.getLike(id)
            this.$set(this.likeStatus,index,!this.likeStatus[index])
        }
    }
}
</script>

<style lang="scss" scoped>
#game{
    background-image: url('../../../assets/images/background/AI手机端长图 历史-04.jpg');
    .title{
        padding-left: 2rem;
        padding-right: 1.25rem;
        z-index: 1;
        display: flex;
        height: 2.0313rem;
        font-size: 1.125rem;
        font-weight: 500;
        // color: #ECECE3;
        font-family: Source Han Sans CN;
        justify-content: center;
        align-items: center;
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
        .left,.right{
            display: flex;
            flex-direction: column;
            // margin: 0 0.625rem;
        }
        .wenchuang{
            display: flex;
            // margin: 0 0.4688rem;
            img{
                width: 2.8125rem;
                height: 1.625rem;
            }
            span{
                position: relative;
                top: 0.375rem;
                left: 0.125rem;
                font-size: 0.875rem;
                font-weight: 500;
                color: #f9e9cf;
            }
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
        .line{
            margin-left: 0.75rem;
            height: 100%;
            flex: 1;
            border-bottom: 0.0625rem solid #e2a995;
        }
        
    }
    .content{
        .item-left{
            position: relative;
            .main{
                margin: 0 auto;
                width: 20.5rem;
                min-height: 14.25rem;
                background: rgba(#a44344, 0.55);
                border-radius: 0.625rem;
                overflow: hidden;
                padding-bottom: 1.5rem;
                .top{
                    display: flex;
                    .photo{
                        margin-top: 1.125rem;
                        margin-left: 0.625rem;
                        margin-right: 0.375rem;
                        width: 8.125rem;
                        height: 7.375rem;
                        border: 0.0625rem dashed #fff;
                        border-radius: 0.625rem;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text{
                        text-align: left;
                        .head{
                            display: flex;
                            justify-content: space-between;
                            margin-top: 0.5625rem;
                            margin-bottom: 0.75rem;
                            height: 1rem;
                            font-size: 1.0625rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #E6E6E6;
                            line-height: 0.9688rem;
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
                        .body{
                            width: 11.125rem;
                            font-size: 0.5625rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #EDCAB2;
                            line-height: 0.9063rem;
                            .desc{
                                // margin-bottom: 0.25rem;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3;
                                overflow: hidden;
                            }
                            .design{
                                h2{
                                    font-size: 0.75rem;
                                    font-weight: 300;
                                    color: #E6E6E6;
                                }
                                span{
                                    font-size: 0.5625rem;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 5;
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
                .bottom{
                    text-align: left;
                    margin-left: 1.375rem;
                    margin-right: 0.5625rem;
                    h2{
                        font-size: 0.75rem;
                        font-weight: 300;
                        color: #E6E6E6;
                    }
                    span{
                        font-size: 0.5625rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #EDCAB2;
                        line-height: 0.9063rem;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                }
            }
            .flower{
                z-index: 1;
                margin-top: 1.0625rem;
                margin-bottom: 0.625rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 1.125rem;
                    height: 1.25rem;
                }
            }
            .point{
                position: absolute;
                top: 7.125rem;
                right: 0.5rem;
                div{
                    width: 0.4375rem;
                    height: 0.4375rem;
                    border-radius: 50%;
                    margin-bottom: 0.9375rem;
                }
                .circle1{
                    background: #9a6f4c;
                }
                .circle2{
                    background: #b02c18;
                }
                .circle3{
                    background: #b2836b;
                }
                .circle4{
                    background: #69312e;
                }
                .circle5{
                    background:#a36147;
                }
                .circle6{
                    background: #884b2f;
                }
                .circle7{
                    background: #a76c53;
                }
                .circle8{
                    background:#6c6c60;
                }
            }
        }
        .item-right{
            position: relative;
            .main{
                margin: 0 auto;
                width: 20.5rem;
                min-height: 14.25rem;
                background: rgba(#a44344, 0.55);
                border-radius: 0.625rem;
                overflow: hidden;
                padding-bottom: 1.5rem;
                .top{
                    margin-left: 0.4375rem;
                    display: flex;
                    flex-direction: row-reverse;
                    .photo{
                        margin-top: 0.9375rem;
                        margin-left: 0.3125rem;
                        margin-right: 0.5625rem;
                        width: 8.125rem;
                        height: 7.375rem;
                        border: 0.0625rem dashed #fff;
                        border-radius: 0.625rem;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text{
                        text-align: left;
                        .head{
                            display: flex;
                            justify-content: space-between;
                            margin-top: 0.5625rem;
                            margin-bottom: 0.75rem;
                            height: 1rem;
                            font-size: 1.0625rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #E6E6E6;
                            line-height: 0.9688rem;
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
                        .body{
                            width: 11.125rem;
                            font-size: 0.5625rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #EDCAB2;
                            line-height: 0.9063rem;
                            .desc{
                                // margin-bottom: 0.25rem;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3;
                                overflow: hidden;
                            }
                            .design{
                                h2{
                                    font-size: 0.75rem;
                                    font-weight: 300;
                                    color: #E6E6E6;
                                }
                                span{
                                    font-size: 0.5625rem;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 5;
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
                .bottom{
                    text-align: left;
                    margin-left: 0.4375rem;
                    margin-right: 0.5625rem;
                    h2{
                        font-size: 0.75rem;
                        font-weight: 300;
                        color: #E6E6E6;
                    }
                    span{
                        font-size: 0.5625rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #EDCAB2;
                        line-height: 0.9063rem;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                }
            }
            .flower{
                z-index: 1;
                margin-top: 1.0625rem;
                margin-bottom: 0.625rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 1.125rem;
                    height: 1.25rem;
                }
            }
            .point{
                position: absolute;
                top: 7.125rem;
                left: 0.5rem;
                div{
                    width: 0.4375rem;
                    height: 0.4375rem;
                    border-radius: 50%;
                    margin-bottom: 0.9375rem;
                }
                .circle1{
                    background: #9a6f4c;
                }
                .circle2{
                    background: #b02c18;
                }
                .circle3{
                    background: #b2836b;
                }
                .circle4{
                    background: #69312e;
                }
                .circle5{
                    background:#a36147;
                }
                .circle6{
                    background: #884b2f;
                }
                .circle7{
                    background: #a76c53;
                }
                .circle8{
                    background:#6c6c60;
                }
            }
        }
    }
}
</style>