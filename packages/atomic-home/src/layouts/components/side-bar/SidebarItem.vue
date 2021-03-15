<template>
  <div v-if="!item.props?.hidden">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.props?.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :base-path="resolvePath(child.path)" class="nest-menu" />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from "path-browserify";
import Item from "./Item.vue";
import AppLink from "./Link.vue";
import { isExternal } from "@/utils/validate";
import { ref } from "vue";

export default {
  name: "SidebarItem",
  components: {
    Item,
    AppLink,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const onlyOneChild = ref(null);

    const hasOneShowingChild = (children = [], parent) => {
      const showingChildren = children.filter(item => {
        if (item.props?.hidden) {
          return false;
        } else {
          onlyOneChild.value = item;
          return true;
        }
      });
      // 如果只有一个子路由节点则直接显示
      if (showingChildren.length === 1) {
        return true;
      }
      // 如果没有子路由节点则直接返回父节点
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    };

    const resolvePath = routePath => {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }
      return path.resolve(props.basePath, routePath);
    };

    return {
      onlyOneChild,
      hasOneShowingChild,
      resolvePath,
    };
  },
};
</script>
