<template>
  <button :class="['btn-pill', `btn-pill--${props.size}`]">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'regular',
    validator: (prop) => ['small', 'regular', 'large'].includes(prop)
  }
});
</script>

<style lang="scss" scoped>
.btn-pill {
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  color: $white-100;
  background-color: $blue-400;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: darken($blue-400, $hover-darken);
  }

  &:focus {
    outline: solid 2px $blue-300;
    outline-offset: 1px;
  }

  &:active {
    background-color: $blue-400;
  }

  &:disabled {
    background-color: $blue-400;
    cursor: default;
    opacity: 0.5;
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
