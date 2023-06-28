<template>
  <header>
    <div class="title">
      <h1 class="title-content">{{ titleContent }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "TitleHome",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      titleContent: this.content,
    };
  },
};
</script>

<style lang="scss" scoped>
	.title {
		margin-top: rem(25);

		.title-content {
			color: $blueDark;
			font-size: rem(24);
			font-weight: 600;
		} 
	}
</style>
