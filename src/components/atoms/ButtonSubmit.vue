<template>
  <button type="submit" class="button-submit" :class="backgroundClass">
    {{ buttonContent }}
  </button>
</template>

<script>
export default {
  name: "ButtonSubmit",
  props: {
    content: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttonContent: this.content,
      backgroundClass: this.background,
    };
  },
};
</script>

<style lang="scss" scoped>
.button-submit {
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
