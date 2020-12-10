<template>
  <div id="production" class="page">
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
        padding-left: 1.5rem;
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
        margin-bottom: 1rem;
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
            position: relative;
            width: 13.75rem;
            margin-left: 0.625rem;
            height: 100%;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 0.0625rem solid #e2a995;
            overflow: auto;
            .tag_wrap{
                position: absolute;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: auto;
                .tag{
                    border: 0.0625rem solid #edcab2;
                    border-radius: 0.625rem;
                    white-space: nowrap;
                    font-size: 0.5rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #F9E3D7;
                    line-height: 0.75rem;
                    padding: 0.125rem 0.625rem;
                    margin-left: 0.3125rem;
                    &.active{
                        color: #000;
                        font-size: 0.625rem;
                        background: #edcab2;
                    }
                }
            }
        }
        
    }
    .production_wrap{
        margin: 0 auto;
        padding-left: 1.375rem;
        padding-right: 1.25rem;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 4.75rem;
        .production_item{
            position: relative;
            width: 9.625rem;
            // height: 12.6875rem;
            background: rgba(#a44344, 0.55);
            border-radius: 0.625rem;
            margin-bottom: 1rem;
            &:nth-child(odd){
                margin-right: 1.25rem;
            }
            .photo{
                margin-top: 0.625rem;
                margin-left: 1.375rem;
                margin-bottom: 0.375rem;
                width: 6.25rem;
                height: 7.875rem;
                border-radius: 0.625rem;
                border: 0.0625rem dashed #e4c292;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                margin-left: 0.9375rem;
                margin-bottom: 0.375rem;
                text-align: left;
                font-size: 0.75rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #F9E3D7;
                // line-height: 4.0625rem;
            }
            .desc{
                width: 7.375rem;
                margin-left: 0.9375rem;
                text-align: left;
                font-size: 0.625rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #F9E3D7;
            }
            .point{
                // width: 1.125rem;
                // height: 10.125rem;
                position: absolute;
                top: 0.75rem;
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
            .star{
                text-align: right;
                .fa-star-o{
                    margin-right: 0.375rem;
                    margin-bottom: 0.25rem;
                    color: #c7b49b;
                    font-size: 1.375rem;
                }
                .fa-star{
                    margin-right: 0.375rem;
                    margin-bottom: 0.25rem;
                    color: #fbae17;
                    font-size: 1.375rem;
                }
            }

        }
    }
}
</style>