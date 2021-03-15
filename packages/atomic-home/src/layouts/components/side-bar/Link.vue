<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { isExternal as isExt } from "@/utils/validate";
import { computed } from "vue";

export default {
  name: "Link",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isExternal = computed(() => isExt(props.to));

    const type = computed(() => {
      if (isExternal.value) {
        return "a";
      }
      return "router-link";
    });

    const linkProps = to => {
      if (isExternal.value) {
        return {
          href: to,
          target: "_blank",
          rel: "noopener",
        };
      }
      return { to };
    };

    return {
      isExternal,
      type,
      linkProps,
    };
  },
};
// type是一个计算属性
</script>
