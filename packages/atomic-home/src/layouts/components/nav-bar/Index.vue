<template>
  <div class="navbar">
    <!-- 面包屑 -->
    <div class="navbar-breadcrumb">
      <bread-crumb></bread-crumb>
    </div>
    <!-- 项目信息 -->
    <div class="navbar-configinfo">
      <!-- 告警信息 -->
      <el-dropdown>
        <el-badge class="item" :value="12">
          <i class="el-icon-message-solid" />
        </el-badge>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 用户信息 -->
      <el-dropdown size="mini">
        <img src="/favicon.ico" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-edit">用户信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-user-solid" divided>我的资产</el-dropdown-item>
            <el-dropdown-item icon="el-icon-info" divided>关于</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button" divided>登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import BreadCrumb from "./BreadCrumb.vue";
export default {
  name: "NavBar",
  components: {
    BreadCrumb,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "styles/common/variables.module.scss";
.navbar {
  height: $navBarHeight;
  border-bottom: 1px solid #c7c4c4;
  display: flex;
  &-breadcrumb {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-size: 20px;
  }
  &-configinfo {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: 130px;
  }
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
