<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, rem(-20), 0);
}
.v-leave-to {
  transform: translate3d(0, rem(20), 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>