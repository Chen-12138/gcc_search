import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404page.vue")
  },
  {
    path: "/",
    name: "index",
    redirect:"home",
    component: () => import("@/views/index.vue"),
    children: [
      {
        path: "home",
        name: "首页",
        component: () => import("@/views/home/index.vue")
      },
      {
        path: "explorer",
        name: "探索",
        component: () => import("@/views/explorer/index.vue"),
        children: [
          {
            path: "collection",
            name: "藏品",
            component: () => import("@/views/explorer/collection/collection.vue"),
          },
          {
            path: "famous",
            name: "名家大师",
            component: () => import("@/views/explorer/famous/famous.vue"),
          },
          {
            path: "history",
            name: '历史',
            component: () => import("@/views/explorer/history/history.vue"),
          }
        ]
      },
      {
        path: "culturalProduction",
        name: "文创",
        component: () => import("@/views/culturalProduction/culturalProduction.vue"),
        children: [
          {
            path: "production",
            name: "文创产品",
            component: () => import("@/views/culturalProduction/production/production.vue")
          },
          {
            path: "game",
            name: "游戏",
            component: () => import("@/views/culturalProduction/game/game.vue")
          }
        ]
      },
      {
        path: "news",
        name: "资讯",
        component: () => import("@/views/news/news.vue"),
        children: [
          {
            path: "academic",
            name: "学术",
            component: () => import("@/views/news/academic/academic.vue")
          }
        ]
      },
      {
        path: "searchresult",
        name: "搜索结果",
        component: () => import("@/views/searchresult/searchresult.vue")
      },
      {
        path: "detail",
        name: "详情页",
        component: () => import("@/views/detail/detail.vue")
      },
      {
        path: "user",
        name: "用户中心",
        component: () => import("@/views/user/user.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
