<template>
  <div class="app-wrapper">
    <!-- 左侧导航栏 -->
    <side-bar class="sidebar-container"></side-bar>
    <!-- 右侧内容区 -->
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from "./components/side-bar/Index.vue";
import NavBar from "./components/nav-bar/Index.vue";
import AppMain from "./components/AppMain.vue";
export default {
  name: "Layout",
  components: {
    SideBar,
    NavBar,
    AppMain,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  width: 100%;
  height: 100%;
}
</style>
