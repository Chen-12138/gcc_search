<template>
  <div class="introduce">
    <div class="headImg"></div>
    <div class="title">粤彩文化</div>
    <div class="content">
      <p style="text-indent: 1em">
        基于于语义本体理论对广彩瓷知识进行知识分类并整理相应的知识库与案例样本库，通过信息抽取、知识融合与知识加工，根据用户需求设计较为完善的个性化学习策略，应用新技术（大数据、语义检索、个性化生成、个性化定制）对传统手工艺个性化学习模式进行研究，研究成果能更好帮助我们理解用户对传统手工艺学习的个性化认知，从而为人们进一步传播与学习传统手工艺提供新的途径，语义本体的广彩瓷个性化推荐系统采用PC端与移动端相结合的方式，为用户提供不同的交互体验，承担起传承和弘扬本区域民族民间优秀文化的重任。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce {
  padding: 0 20px;
  width: 100%;
  margin: 60px 0;
  .headImg {
    margin: 25px auto;
    height: 30px;
    width: 30px;
    background-image: url(../../assets/images/hua.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    height: 40px;
    width: 120px;
    border: solid 1px #edcbbd;
    border-radius: 10px;
    margin: 0 auto 20px auto;
    font-size: 20px;
    line-height: 40px;
    color: #edcbbd;
    text-align: center;
    background-color: #a1231f;
  }
  .content {
    margin: 10px auto 0 auto;
    border-radius: 20px;
    width: 95%;
    line-height: 25px;
    font-size: 18px;
    color: #ecece3;
    background-image: linear-gradient(
      rgb(161, 35, 31, 0.2),
      rgb(161, 35, 31, 0.5)
    );
    padding: 20px 20px;
  }
}
</style>