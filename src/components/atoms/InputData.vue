<template>
  <div class="input-row" :class="backgroundClass">
    <label :for="idContent" class="label">{{ labelContent }}:</label>
    <input
      :type="typeContent"
      :id="idContent"
      :name="nameContent"
      :placeholder="placeholderContent"
			v-model.trim="valueContent"
			@keyup="EmitValueContent"
      class="input"
    />
  </div>
</template>

<script>
export default {
  name: "InputData",
	emits: ["inputValue"],
  props: {
    inputId: {
      type: String,
      required: true,
    },
    inputLabel: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    inputPlaceholder: {
      type: String,
      required: true,
    },
    inputBackground: {
      type: String,
      required: true,
    },
		inputValue: {
			type: String,
			default: "",
		}
  },
  data() {
    return {
      idContent: this.inputId,
      labelContent: this.inputLabel,
      typeContent: this.inputType,
      nameContent: this.inputName,
      placeholderContent: this.inputPlaceholder,
      backgroundClass: this.inputBackground,
			valueContent: this.inputValue
    };
  },
	methods: {
		EmitValueContent() {
			const objectMessage = {
				name: this.nameContent,
				value: this.valueContent
			}
			this.$emit("inputValue", objectMessage)
		}
	},
	watch: {
		inputValue(value) {
			this.valueContent = value
		}
	}
};
</script>

<style lang="scss" scoped>
.input-row {
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: rem(8);

  .input {
    background: none;
    border: none;
    font-size: rem(16);
    outline: none;

    &::placeholder {
      color: inherit;
      font-size: rem(16);
    }
  }

  &.dark {
    color: $black;

    .input {
			color: $black;

      &::placeholder {
        color: $black;
      }
    }
  }

  &.light {
    color: $white;

    .input {
			color: $white;

      &::placeholder {
        color: $white;
      }
    }
  }
}
</style>
