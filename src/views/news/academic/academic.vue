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
            <div class="item">
                <div class="flower">
                    <img src="@/assets/images/hua.png" alt="">
                </div>
                <div class="photo">

                </div>
                <div class="text">
                    <div class="title">
                        《从广彩瓷器看海丝路上的粤商》  何东红 
                    </div>
                    <div class="main">
                        <span class="zhaiyao">摘要：</span>
                        <p class="neirong">
                            广州自古就是“海上丝绸之路”的东方主埠，有千年商都之称。广彩瓷器作为15至19世纪我国广州明清外贸的重要商品之一，正是粤商顺势而为、借势而上、造势而动的商业谋略，使广彩瓷器脱颖而出，在清代中国外销瓷市场一家独大，持续领跑。透过广彩瓷器的发展过程，可见粤商在清代海外贸易活动中，不但加强了广州与内地及海外的经济联系与往来，推动了中西方商品流通和经济发展，更为中国清代商业、手工业的发展产生了不可估量的影响。
                        </p>
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

        }
    },
    mounted(){
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
            display: flex;
            // justify-content: center;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            width: 340px;
            height: 515px;
            background: #a44344;
            opacity: 0.85;
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
            }
            .text{
                .title{
                    text-align: left;
                    margin-top: 14px;
                    margin-bottom: 18px;
                    font-size: 16px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #E6E6E6;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .main{
                    width: 282px;
                    text-align: left;
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
        }
    }
}

</style>