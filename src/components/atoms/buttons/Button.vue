<template>
<button
  :class="classes"
  :disabled="disabled"
>
  <span>{{ label }}</span>
</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  size: {
    type: String,
    default: 'regular',
    validator: (prop) => ['small', 'regular', 'large'].includes(prop)
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (prop) => ['filled', 'text'].includes(prop)
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

const classes = computed(() => ({
  'btn': true,
  [`btn--${props.size}`]: true,
  [`btn--${props.variant}`]: true,
}));
</script>

<style lang="scss" scoped>
.btn {
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: solid 2px $blue-300;
    outline-offset: 1px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &--filled {
    color: $white-100;
    background-color: $blue-400;

    &:hover {
      background-color: darken($blue-400, $hover-darken);
    }

    &:active {
      background-color: $blue-400;
    }

    &:disabled {
      background-color: $blue-400;
    }
  }

  &--text {
    color: $blue-400;
    background-color: transparent;

    &:hover {
      color: darken($blue-400, $hover-darken);
    }

    &:active {
      color: $blue-400;
      background-color: $white-200;
    }

    &:disabled {
      color: $blue-400;
    }
  }

  &--large {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &--regular {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
  }

  &--small {
    padding: 0.375rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
