import router from '@/router'
let typeTable = {
  1: '详情页',  //detailed 不需要锚点跳转,但需要附带额外的请求参数
  2: '名家大师',  //需要锚点跳转
  3: '游戏',     //需要锚点跳转
  4: '学术',     //需要锚点+分页请求
  5: '文创产品'
}

//带锚点的跳转.call来绑定this
//type:要跳转的页面id
//query:{
//       id:锚点跳转的依据
//       number：数据的下标,用于分页请求
//}
function linkTo(type, query) {
  type = typeTable[type];
  router.push({
    name: type,
    query
  });
}

//跳转到当前页面中的锚点
// beforeUpdate中使用,因为mount获取不到dom,想要在mount中使用，必须用ref来获取dom的...考虑欠佳
function scrollTo() {
  let id = router.app.$route.query.id
  let div = document.getElementById(id);
  if (div == null) return
  div.scrollIntoView(true); //锚点跳转API
}

export { scrollTo, linkTo }
