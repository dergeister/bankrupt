<template>
<button
  :class="btnClasses"
  @click="handleNavigation"
>
  <i :class="iconClasses"></i>
  <span class="nav-button__label">{{ label }}</span>
</button>
</template>

<script setup>
import { computed } from 'vue';

import useEmitter from '../../../composables/useEmitter';

import 'primeicons/primeicons.css';

const emitter = useEmitter();

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  icon: {
    type: String,
    default: 'dollar',
    validator: (prop) => [
      'dollar',
      'credit-card',
      'sort-alt',
    ].includes(prop)
  },
  to: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const btnClasses = computed(() => ({
  'nav-button': true,
  'nav-button--active': props.active,
}));

const iconClasses = computed(() => ({
  'pi': true,
  [`pi-${props.icon}`]: true,
}));

const handleNavigation = () => {
  if(emitter) {
    emitter.emit(props.to);
  }
}
</script>

<style lang="scss" scoped>
.nav-button {
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: $gray-600;
  font-weight: 400;
  font-size: 1rem;

  &:focus {
    outline: solid 2px $blue-300;
    outline-offset: 1px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    color: $blue-400;
  }

  &:active {
    background-color: $white-300;
  }

  &__label {
    margin-left: 8px;
  }

  &--active {
    font-weight: 600;
  }

  @media (max-width: $media-breakpoint)  {
    padding: 1rem;
    background-color: $white-200;

    &__label {
      display: none;
    }
  }
}
</style>
