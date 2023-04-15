const Layout = () => import("@/layout/index.vue");
export default {
  path: "/manage",
  name: "Manage",
  component: Layout,
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
      name: "InterfaceManage",
      component: () => import("@/views/manage/interfaceManage.vue"),
      meta: {
        title: "接口管理"
      }
    },
    {
      path: "/manage/interfaceAdd",
      name: "InterfaceAdd",
      component: () => import("@/views/manage/interfaceAdd.vue"),
      meta: {
        title: "新增接口"
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
