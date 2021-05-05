<template>
  <div class="a-app-wrapper clearfix">
    <!-- 左侧导航栏 -->
    <side-bar class="a-sidebar-container"></side-bar>
    <!-- 右侧内容区 -->
    <div class="a-main-container">
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
@import "styles/common/mixin.scss";

@include block("app-wrapper") {
  width: 100%;
  height: 100%;
  @include block("main-container") {
    height: 100%;
  }
}
</style>
