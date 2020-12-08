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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#game{
    background-image: url('../../../assets/images/background/历史_历史.jpg');
    .title{
        z-index: 1;
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
        .wenchuang{
            display: flex;
            margin: 0 7.5px;
            img{
                width: 38px;
                height: 20px;
            }
            span{
                font-size: 12px;
            }
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
}
</style>