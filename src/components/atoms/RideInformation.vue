<template>
  <ul class="list-information">
    <li class="item-information" v-for="(information, key, index) in informationContent" :key="index">
      <div class="paragraph">
        <p class="paragraph-content">
          <strong class="strong">{{key}}: </strong> {{information}}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RideInformation",
  props: {
    information: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      informationContent: this.information,
    };
  }
};
</script>

<style lang="scss" scoped>
.list-information {
	.item-information {
		.paragraph {
			.paragraph-content {
				color: $white;
				font-size: rem(12);

				.strong {
					font-weight: bold;
					text-transform: capitalize;
				}
			}
		}

		+ .item-information {
			margin-top: rem(16);
		}
	}
}
</style>
