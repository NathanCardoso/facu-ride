<template>
	<div class="card" :class="backgroundClass">
		<ParagraphCard :content="paragraphContent" />
		<ImageCard :imagePath="imagePath" :imageAlt="imageAlt"/>
	</div>
</template>

<script>
import ParagraphCard from "../atoms/ParagraphCard.vue"
import ImageCard from "../atoms/ImageCard.vue"

export default {
	name: "CardMenu",
	props: {
		contentParagraph: {
			type: String,
			rquired: true
		},
		pathImage: {
			type: String,
			required: true
		},
		altImage: {
			type: String,
			required: true
		},
		background: {
			type: String,
			required: true
		}
	},
	data(){
		return {
			paragraphContent: this.contentParagraph,
			imagePath: this.pathImage,
			imageAlt: this.altImage,
			backgroundClass: this.background
		}
	},
	components: {
		ParagraphCard,
		ImageCard
	}
}
</script>

<style lang="scss" scoped>
	.card {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding: 0 rem(16);
		background: red;
		border-radius: rem(8);
		height: rem(130);

		&.green {
			background: $green;
		}

		&.pink {
			background: $pink;
		}

		&.blue-dark {
			background: $blueDark
		}

		&.green-dark {
			background: $greenDark;
		}
	}
</style>