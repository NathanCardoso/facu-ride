<template>
  <div class="notification" :class="notificationType">
    <div class="title-notification">
      <h3 class="title">{{ titleNotification }}</h3>
    </div>
    <div class="paragraph-notification">
      <p class="paragraph">{{ paragraphNotification }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationRequest",
	props: {
		typeNotification: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		paragraph: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			notificationType: this.typeNotification,
			titleNotification: this.title,
			paragraphNotification: this.paragraph
		}
	}
};
</script>

<style lang="scss" scoped>
.notification {
	z-index: 99999;
	display: flex;
	flex-direction: column;
	gap: rem(16);
	background: $white;
	border-radius: rem(4);
	box-shadow: 0 rem(2) rem(4) rgba(0, 0, 0, 0.3);
	width: rem(280);
	height: rem(70); 
	padding: rem(16);
	position: absolute;
	top: 5%;
	right: 0;
	animation: mymove 0.4s;

	  @keyframes mymove {
    0% {
      right: -100%;
    }

    75% {
      right: 15%;
    }

    100% {
      right: 0;
    }
  }

	.title-notification {
		.title {
			font-size: rem(24);
			color: $blackLight;
			font-weight: bold;
		}
	}

	.paragraph-notification {
		.paragraph {
			font-size: rem(16);
			color: $black;
		}
	}

	&.success {
		border-left: rem(16) solid $green;
	}

	&.error {
		border-left: rem(8) solid red;
	}
}
</style>
