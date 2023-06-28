<template>
	<div class="paragraph">
		<p class="paragraph-content">{{paragraphContent}}</p>
	</div>
</template>

<script>
export default {
	name: 'ParagraphCard',
	props: {
		content: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			paragraphContent: this.content
		}
	},
}
</script>

<style lang="scss" scoped>
	.paragraph {
		margin-bottom: rem(16);

		.paragraph-content {
			color: $white;
			font-size: rem(16);
			font-weight: 500;
		}
	}
</style>