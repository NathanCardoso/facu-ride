<template>
	<button type="button" class="photo-profile">Adicionar Foto</button>
</template>

<script>
export default {
	name: "PhotoButton"
}
</script>

<style lang="scss" scoped>
	.photo-profile {
		width: rem(105);
		height: rem(105);
		background: $white;
		border: 1px solid $blackLight;
		border-radius: 50%;
		font-size: rem(14);
	}
</style>