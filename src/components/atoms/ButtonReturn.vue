<template>
  <button @click.prevent="goBack" class="button-return" :class="backgroundClass">Voltar</button>
</template>

<script>
export default {
  name: "ButtonReturn",
  emits: ["goBack"],
  props: {
    layout: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      backgroundClass: this.layout,
    };
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
  },
};
</script>

<style lang="scss" scoped>
.button-return {
  width: rem(177);
  height: rem(37);
  border: none;
  border-radius: rem(8);

  &.dark {
    background: $black;
    color: $white;
  }

  &.light {
    background: $white;
    color: $blueDark;
  }
}
</style>
