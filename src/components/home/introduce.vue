<template>
  <div class="introduce">
    <div class="headImg"></div>
    <div class="title">广彩瓷</div>
    <div class="content">
      <p style="text-indent: 1em">
        广彩瓷是指广州地区烧制的织金彩瓷及其采用的低温釉上彩装饰技法，始于中国明代的广州三彩，以后发展为五彩，至乾隆、嘉庆时期渐趋成熟，建立了绚丽华美、金碧辉煌的特点。后来广彩艺人继承明代彩瓷的艺术特色，吸收西洋画法，绘上具有岭南地方特色的风格图案，逐渐形成独特的岭南艺术风格，并将许多图案固定下来，成为广彩的传统花款，例如花篮、龙凤、彩蝶、金鱼、古装人物等。广彩瓷色彩鲜艳浓重，构图精致紧密，在洁白的瓷器上积上金地，如万缕金丝织于宝石之上，具有雍容华贵之感以及浓郁的东方民族特色，在中国釉上彩系列中独树一帜，自成风格。在17-18世纪欧洲洛可可风的推动下，广彩瓷作为著名的“外贸货”风靡欧美各国，甚至被誉为“欧洲官窑”，成为欧洲皇室及上流社会人士争相抢购的顶级奢侈品。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce {
  padding: 0 1.25rem;
  width: 100%;
  margin: 3.75rem 0;
  .headImg {
    margin: 1.5625rem auto;
    height: 1.875rem;
    width: 1.875rem;
    background-image: url(../../assets/images/hua.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    height: 2.5rem;
    width: 7.5rem;
    border: solid 0.0625rem #edcbbd;
    border-radius: 0.625rem;
    margin: 0 auto 1.25rem auto;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: #edcbbd;
    text-align: center;
    background-color: #a1231f;
  }
  .content {
    margin: 0.625rem auto 0 auto;
    border-radius: 1.25rem;
    width: 95%;
    line-height: 1.5625rem;
    font-size: 0.9375rem;
    color: #ecece3;
    background-image: linear-gradient(
      rgb(161, 35, 31, 0.2),
      rgb(161, 35, 31, 0.5)
    );
    padding: 1.25rem 1.25rem;
  }
}
</style>