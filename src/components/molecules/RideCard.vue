<template>
  <div class="wrapper">
    <div class="ride-card" @click="clicked">
      <ProfilePhoto />
      <RideInformation :information="informationData" />
    </div>
    <button type="button" class="button-delete" @click.prevent="clickedDelete">X</button>
  </div>
</template>

<script>
import ProfilePhoto from "../atoms/ProfilePhoto.vue";
import RideInformation from "../atoms/RideInformation.vue";

export default {
  name: "RideCard",
  emits: ["clicked", "clickedDelete"],
  props: {
    dataInformation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      informationData: this.dataInformation,
    };
  },
  components: {
    ProfilePhoto,
    RideInformation,
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
		clickedDelete() {
			this.$emit("clickedDelete")
		}
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	align-items: flex-start;
	gap: rem(8);

	.ride-card {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: rem(16);
		padding: rem(16);
		background: $blackLight;
		border-radius: rem(8);
	}
	
	.button-delete {
		width: rem(30);
		height: rem(30);
		border: none;
		border-radius: rem(4);
		background: $white;
		color: $blueDark;
	}
}
</style>
