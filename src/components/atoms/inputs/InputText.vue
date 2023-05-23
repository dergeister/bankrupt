<template>
<input
  type="text"
  :class="classes"
  :value="modelValue"
  :disabled="disabled"
  :placeholder="placeholder"
  @input="emit('update:modelValue', $event.target.value)"
/>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
  },
  size: {
    type: String,
    default: 'regular',
    validator: (prop) => ['small', 'regular', 'large'].includes(prop)
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
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
  [`ipt-text--${props.size}`]: true,
  'ipt-text--invalid': props.invalid
}));
</script>

<style lang="scss" scoped>
.ipt-text {
  font-family: 'Inter', sans-serif;
  color: $black-800;
  border: none;
  border-radius: 32px;
  border: solid 1px $white-200;
  background-color: $white-200;

  &:focus {
    outline: none;
    background-color: $white-300;
    border: solid 1px $white-300;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &--invalid,
  &--invalid:focus {
    box-shadow: 0 0 5px $red-600;
  }

  &--large {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &--regular {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  &--small {
    padding: 0.375rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
