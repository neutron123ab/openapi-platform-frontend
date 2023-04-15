const Layout = () => import("@/layout/index.vue");
export default {
  path: "/information",
  name: "Information",
  component: Layout,
  redirect: "/information/details",
  meta: {
    icon: "lollipop",
    title: "接口信息页",
    showLink: false,
    rank: 100
  },
  children: [
    {
      path: "/information/details",
      name: "Detail",
      component: () => import("@/views/information/index.vue"),
      meta: {
        title: "详情"
      }
    }
  ]
} as RouteConfigsTable;
