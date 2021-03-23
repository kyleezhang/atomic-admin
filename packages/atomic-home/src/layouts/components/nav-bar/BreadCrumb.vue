<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in matched" :key="index" :to="resolvePath(item)">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "BreadCrumb",
  setup() {
    const route = useRoute();
    const matched = ref(null);

    function getMatched() {
      matched.value = route.matched.filter(item => item.meta?.title);
    }

    function resolvePath(item) {
      if (item.meta?.activeMenu) {
        return item.meta.activeMenu;
      }
      return item.path;
    }

    getMatched();
    watch(route, getMatched);

    return { matched, resolvePath };
  },
};
</script>

<style lang="scss" scoped></style>
