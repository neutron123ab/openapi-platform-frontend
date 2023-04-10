export default {
  path: "/manage",
  redirect: "/manage/interfaceManage",
  meta: {
    icon: "lollipop",
    title: "管理页",
    // showLink: false,
    rank: 8
  },
  children: [
    {
      path: "/manage/interfaceManage",
      name: "interfaceManage",
      component: () => import("@/views/manage/interfaceManage.vue"),
      meta: {
        title: "接口管理"
      }
    },
    {
      path: "/manage/interfaceAnalyse",
      name: "interfaceAnalyse",
      component: () => import("@/views/manage/interfaceAnalyse.vue"),
      meta: {
        title: "接口分析"
      }
    }
  ]
} as RouteConfigsTable;
