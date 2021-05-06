<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    color: {
      type: String,
      default: "#bbbbbb",
    },
    name: {
      type: String,
      default: "",
    },
  },
  setup(props: { color: string; name: string }) {
    const iconName = computed(() => `#icon-${props.name}`);
    const svgClass = computed(() => {
      if (props.name) {
        return `svg-icon icon-${props.name}`;
      }
      return "svg-icon";
    });

    return {
      iconName,
      svgClass,
    };
  },
});
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
