<template>
  <div class="a-app-container">
    <router-view v-slot="{ Component }">
      <transition name="a-slide-fade">
        <div>
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppMain",
};
</script>

<style scoped lang="scss">
@import "styles/common/variables.module.scss";
@import "styles/common/mixin.scss";

@include block("app-container") {
  padding: 20px;
  height: calc(100% - #{$navBarHeight});
}

.a-slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.a-slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.a-slide-fade-enter-from,
.a-slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
