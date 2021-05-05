<template>
  <div class="a-card" v-bind="$attrs">
    <div class="a-card-title">
      <slot name="title">{{ title }}</slot>
      <i class="a-card-title__close el-icon-close"></i>
    </div>
    <div :ref="bodyRef" class="a-card-body">
      <slot name="body">
        <computedComponent v-if="!computedContent" :content="content"></computedComponent>
        <template v-else>{{ computedContent }}</template>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, isVNode, computed } from "vue";
import type { VNode, Ref, WritableComputedRef, PropType } from "vue";

export default defineComponent({
  components: {
    computedComponent: {
      props: {
        content: {
          type: Object as PropType<string | VNode>,
          default: "",
        },
      },
      render(props: { content: any }) {
        return props.content;
      },
    },
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: Object as PropType<string | VNode>,
      default: "",
    },
  },
  setup(props: { title: string; content: string | VNode }) {
    const bodyRef: Ref<any> = ref(null);
    const computedContent: WritableComputedRef = computed(() => {
      if (isVNode(props.content)) {
        return "";
      }
      return props.content;
    });

    return {
      bodyRef,
      computedContent,
    };
  },
});
</script>

<style scoped lang="scss">
@import "styles/common/mixin.scss";
@import "styles/common/variables.scss";

@include block("card") {
  border: 1px solid #bbb;
  width: 300px;
  height: 180px;
  padding: 10px;
  margin: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  @include block("card-title") {
    text-align: left;
    font-size: 18px;
    font-weight: bolder;
    padding-bottom: 8px;
    border-bottom: 1px solid #bbb;
    @include element("close") {
      float: right;
      cursor: pointer;
      &:hover {
        color: $--color-hover;
      }
    }
  }
  @include block("card-body") {
    max-height: 126px;
    max-width: 280px;
    overflow: auto;
  }
}
</style>
