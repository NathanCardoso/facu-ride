<template>
  <header class="header">
    <div class="title">
      <h1 class="title-content">{{ titleContent }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "TitlePage",
	props: {
		content: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			titleContent: this.content
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	margin-top: rem(36);

	.title {
		display: flex;
		align-items: center;
		justify-content: center;

		.title-content {
			font-size: rem(36);
			color: $black;
			font-weight: bold;
			text-align: center;
			line-height: rem(48);
		}
	}
}
</style>
