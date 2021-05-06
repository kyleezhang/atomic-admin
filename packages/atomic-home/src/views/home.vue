<template>
  <div>主页</div>
  <card title="abc" :content="content">
    <template #title>hello world</template>
    <template #body>
      <h1>张昊大笨蛋</h1>
    </template>
  </card>
  <svg-icon name="list" style="width: 32px; height: 32px"></svg-icon>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import Card from "comps/card/Index.vue";

export default defineComponent({
  name: "Home",
  components: {
    Card,
  },
  setup() {
    const content = h("div", "hello world");
    return { content };
  },
});
</script>

<style scoped></style>
