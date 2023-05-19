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
  variant: {
    type: String,
    default: 'transparent',
    validator: (prop) => ['transparent', 'filled'].includes(prop)
  },
  placeholder: {
    type: String,
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
  'ipt': true,
  [`ipt--${props.variant}`]: true,
  'ipt--invalid': props.invalid
}));
</script>

<style lang="scss" scoped>
.ipt {
  font-family: 'Inter', sans-serif;
  color: $black-800;
  border: none;

  &:focus {
    outline: none;
  }

  &--transparent {
    padding: 0.25rem 0.5rem;
    border-bottom: solid 1px $gray-400;
    background-color: transparent;

    &:focus {
      border-bottom-color: $black-800;
    }
  }

  &--filled {
    padding: 0.5rem 1rem;
    border-radius: 32px;
    border: solid 1px $white-200;
    background-color: $white-200;

    &:focus {
      background-color: $white-300;
      border: solid 1px $white-300;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &--invalid,
  &--invalid:focus {
    border-color: $red-600;
  }
}
</style>
