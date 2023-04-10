export default {
  path: "/demo",
  redirect: "/demo/403",
  meta: {
    icon: "informationLine",
    title: "测试页面",
    // showLink: false,
    rank: 10
  },
  children: [
    {
      path: "/demo/403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        title: "403"
      }
    },
    {
      path: "/demo/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "404"
      }
    },
    {
      path: "/demo/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "500"
      }
    }
  ]
} as RouteConfigsTable;
