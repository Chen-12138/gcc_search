<template>
  <div id="game">
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
        <div class="item-left"
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
                            <img src="" alt="">
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

            <div class="flower">
                <img src="@/assets/images/hua.png" alt="">
            </div>
        </div>
        <div class="item-right">
            <div class="main">
                <div class="top">
                    <div class="photo">
                        <img src="" alt="">
                    </div>
                    <div class="text">
                        <div class="head">
                            跃瓷
                            <img src="" alt="">
                        </div>
                        <div class="body">
                            <span class="desc">
                                广彩瓷作为一种广州地区一种特别的艺术品，理应被世人所认识、所了解，本游戏通过跳跃闯关的编程，让体验者感受广彩的文化
                            </span>
                            <div class="design">
                                <h2>
                                    设计说明：
                                </h2>
                                <span>
                                    相比于青花瓷等瓷器，广彩瓷在国内知名度不是很高。所以，让大家知道广彩瓷，是我们首要确定的目的。其次，在知道的基础上去了解广彩瓷，将泡泡龙中的泡泡，替换成广彩瓷的一些图案，能更加直观的介绍广彩瓷。
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <h2>游戏玩法：</h2>
                    <span>
                        界面的上方和下方有移动的广彩障碍物。点击游戏界面，按空格控制角色躲避广彩障碍物，按上下键可以调整角色大小。当角色和广彩瓷碰撞后，游戏结束。
                    </span>
                </div>
            </div>

            <div class="flower">
                <img src="@/assets/images/hua.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            gameList:[],
        }
    },
    mounted(){
        this.getGame();
        console.log(process.env.VUE_APP_BASE_API)
    },
    methods: {
        // 获取全部文创游戏
        async getGame() {
                try {
                    let res = await this.$http.Production.getGame({
                        page: 1,
                        pageSize: 3
                    })
                    this.gameList = res.data.data
                    console.log(this.gameList)
                } catch(error) {
                    console.log(error)
                }
            },
    }
}
</script>

<style lang="scss" scoped>
#game{
    background-image: url('../../../assets/images/background/历史_历史.jpg');
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
        }
        .item-right{
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
        }
    }
}
</style>