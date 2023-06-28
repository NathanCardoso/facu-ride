<template>
  <header>
    <div class="title">
      <h2 class="title-content">{{ titleContent }}</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: "TitleSection",
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
			font-size: rem(28);
			color: $black;
			font-weight: bold;
		}
	}
</style>
