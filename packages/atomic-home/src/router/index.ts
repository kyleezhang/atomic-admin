import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Index.vue";
import { h } from "vue";

/**
 * Note: 子菜单仅当路由的children.length >= 1时才出现
 *
 * props: {
 *   hidden: true                   设置为true时路由将不显示在sidebar中(默认false)
 *   alwaysShow: true               如果设置为true则总是显示在菜单根目录
 *                                  如果不设置alwaysShow, 当路由有超过一个子路由时,
 *                                  将会变为嵌套模式, 否则不会显示根菜单
 * }
 * redirect: noRedirect           如果设置noRedirect时，breadcrumb中点击将不会跳转
 * name:'router-name'             name用于<keep-alive> (必须设置!!!)
 * meta : {
    roles: ['admin','editor']    页面可访问角色设置 
    title: 'title'               sidebar和breadcrumb显示的标题 
    icon: 'svg-name'/'el-icon-x' sidebar中显示的图标
    breadcrumb: false            设置为false，将不会出现在面包屑中
    activeMenu: '/example/list'  如果设置一个path, sidebar将会在高亮匹配项
  }
 */

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "导航" },
    children: [
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
        name: "Home",
        meta: { title: "首页", icon: "el-icon-s-home" },
      },
      {
        path: "user",
        component: {
          render() {
            return h("div", {}, "敬请期待");
          },
        },
        name: "User",
        meta: { title: "用户管理", icon: "el-icon-s-custom" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
