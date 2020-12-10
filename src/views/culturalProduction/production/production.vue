<template>
  <div id="production">
    <div class="title">
        <div class="left">
            <img class="img2" src="@/assets/images/角.png" alt="">
            <img class="img3" src="@/assets/images/角.png" alt="">
        </div>
        <div class="wenchuang">
            <img src="@/assets/images/文創2.png" alt="">
            <span>产品</span>
        </div>
        <div class="right">
            <img class="img4" src="@/assets/images/角.png" alt="">
            <img class="img5" src="@/assets/images/角.png" alt="">
        </div>
        <div class="line">
            <div class="tag_wrap">
                <div class="tag" v-for="item in types" :key="item.value"
                :class="type === item.value ? 'active' : ''"
                @click="changeType(item.value)"
                >{{item.type}}</div>
            </div>
        </div>
    </div>
    <div class="production_wrap">
        <div class="production_item" v-for="item in list" :key="item.title">
            <div class="photo">
                <img :src="item.photo" alt="">
            </div>
            <div class="name">
                {{item.name}}
            </div>
            <div class="desc">
                {{item.title}}
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
            <div class="star">
                <i v-if="!likeStatus" @click="collect" class="fa fa-star-o" aria-hidden="true"></i>
                <i v-else @click="collect" class="fa fa-star" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // 当前分类
            type: 1,
            // 搜索分类
            types: [
                {
                    type: '本子',
                    value:1
                },
                {
                    type: '冰箱贴',
                    value: 2
                },
                {
                    type: '帆布袋',
                    value: 3
                },
                {
                    type: '手机壳',
                    value: 4
                },
                {
                    type: '书签',
                    value: 5
                },
                {
                    type: '胸章',
                    value: 6
                },
            ],
            // 收藏状态
            likeStatus: false,
            // 数据
            list: []
        }
    },
    mounted(){
        this.getProduction()
    },
    methods:{
        // 改变分类
        changeType(type) {
        // console.log(type)
            this.type = type
            this.getProduction()
        },
        // 获取文创产品
        async getProduction(id) {
            try {
                let res = await this.$http.Production.getProduction({
                    type: this.type
                })
                this.list = res.data.data
                this.likeStatus = res.data.data[0].isCollected
                // console.log(res)
            } catch(error) {
                console.log(error)
            }
        },
        // 调用收藏接口
        async getLike() {
            try {
                let res = await this.$http.Production.getProductLike({
                    type: this.type
                })
            } catch(error) {
                console.log(error)
            }
        },
        // 点击收藏
        collect(){
            this.getLike()
            this.likeStatus = !this.likeStatus
        }
    }
}
</script>

<style lang="scss" scoped>
#production{
    background-image: url('../../../assets/images/background/历史_历史.jpg');
    .title{
        padding-left: 24px;
        padding-right: 20px;
        z-index: 1;
        display: flex;
        height: 32.5008px;
        font-size: 18px;
        font-weight: 500;
        // color: #ECECE3;
        font-family: Source Han Sans CN;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 16px;
        .left,.right{
            display: flex;
            flex-direction: column;
            // margin: 0 10px;
        }
        .wenchuang{
            display: flex;
            // margin: 0 7.5008px;
            img{
                width: 45px;
                height: 26px;
            }
            span{
                position: relative;
                top: 6px;
                left: 2px;
                font-size: 14px;
                font-weight: 500;
                color: #f9e9cf;
            }
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
        .line{
            position: relative;
            width: 220px;
            margin-left: 10px;
            height: 100%;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #e2a995;
            overflow: auto;
            .tag_wrap{
                position: absolute;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: auto;
                .tag{
                    border: 1px solid #edcab2;
                    border-radius: 10px;
                    white-space: nowrap;
                    font-size: 8px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #F9E3D7;
                    line-height: 12px;
                    padding: 2px 10px;
                    margin-left: 5px;
                    &.active{
                        color: #000;
                        font-size: 10px;
                        background: #edcab2;
                    }
                }
            }
        }
        
    }
    .production_wrap{
        margin: 0 auto;
        padding-left: 22px;
        padding-right: 20px;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 70px;
        .production_item{
            position: relative;
            width: 154px;
            // height: 203px;
            background: rgba(#a44344, 0.55);
            border-radius: 10px;
            margin-bottom: 16px;
            &:nth-child(odd){
                margin-right: 10px;
            }
            .photo{
                margin-top: 10px;
                margin-left: 22px;
                margin-bottom: 6px;
                width: 100px;
                height: 126px;
                border-radius: 10px;
                border: 0.0625rem dashed #e4c292;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                margin-left: 15px;
                margin-bottom: 6px;
                text-align: left;
                font-size: 12px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #F9E3D7;
                // line-height: 65px;
            }
            .desc{
                width: 118px;
                margin-left: 15px;
                text-align: left;
                font-size: 10px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #F9E3D7;
            }
            .point{
                // width: 18px;
                // height: 162px;
                position: absolute;
                top: 12px;
                right: 8px;
                div{
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    margin-bottom: 15px;
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
            .star{
                text-align: right;
                .fa-star-o{
                    margin-right: 6px;
                    margin-bottom: 4px;
                    color: #c7b49b;
                    font-size: 22px;
                }
                .fa-star{
                    margin-right: 6px;
                    margin-bottom: 4px;
                    color: #fbae17;
                    font-size: 22px;
                }
            }

        }
    }
}
</style>