<template>
	<div class="image">
		<img class="image-card" :src="pathImage" :alt="altImage">
	</div>
</template>

<script>
export default {
	name: "ImageCard",
	props: {
		imagePath: {
			type: String,
			default: "",
			required: true
		},
		imageAlt: {
			type: String,
			default: "",
			required: true
		}
	},
	data() {
		return {
			pathImage: this.imagePath,
			altImage: this.imageAlt,
			loading: true
		}
	}
}
</script>

<style lang="scss" scoped>
	.image {
		max-width: rem(140);
		max-height: rem(120);

		.image-card {
			object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}
</style>