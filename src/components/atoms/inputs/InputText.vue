<template>
<div class="input-text__wrapper">
  <input
    :type="type"
    :class="classes"
    :value="modelValue"
    :disabled="disabled"
    :placeholder="label"
    @input="emit('update:modelValue', $event.target.value)"
  />
  <label class="input-text__label">{{ label }}</label>
</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    defaut: 'text'
  },
  label: {
    type: String,
    default: 'Label'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => ({
  'ipt-text': true,
  'ipt-text--invalid': props.invalid
}));
</script>

<style lang="scss" scoped>
.input-text__wrapper {
  position: relative;
  display: flex;

  .ipt-text {
    font-family: 'Inter', sans-serif;
    color: $black-800;
    border: none;
    border-bottom: solid 1px $gray-400;
    background-color: transparent;
    padding: 0.5rem;
    font-size: 0.875rem;
    transition: all 0.25s ease;
    flex: 1;

    &:focus {
      outline: none;
      border-color: $gray-600;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;

      ~ .input-text__label {
        opacity: 0.5;
      }
    }
    
    &--invalid,
    &--invalid:focus {
      border-color: $red-400;

      ~ .input-text__label {
        color: $red-400 !important;
      }
    }

    &::placeholder {
      color: transparent;
    }

    ~ .input-text__label {
      position: absolute;
      font-family: 'Inter', sans-serif;
      transition: all 0.25s ease;
      color: $gray-600;
      left: 0;
      top: -0.75rem;
      font-size: 0.75rem;
      pointer-events: none;
    }
    
    &:placeholder-shown ~ .input-text__label {
      left: 0.5rem;
      top: 0.5rem;
      font-size: 0.875rem;
      color: $gray-600;
    }

    &:focus ~ .input-text__label {
      color: $black-800;
      left: 0;
      top: -0.75rem;
      font-size: 0.75rem;
    }
  }
}
</style>
