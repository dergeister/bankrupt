<template>
<div class="btn-circle__wrapper">
  <button
    :class="btnClasses"
    :disabled="disabled"
  >
    <i :class="iconClasses"></i>
  </button>
  <span class="btn-circle__label">{{ label }}</span>
</div>
</template>

<script setup>
import { computed } from 'vue';

import 'primeicons/primeicons.css';

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  size: {
    type: String,
    default: 'regular',
    validator: (prop) => ['small', 'regular'].includes(prop)
  },
  icon: {
    type: String,
    default: 'bars',
    validator: (prop) => [
      'bars',
      'bell',
      'calendar',
      'chevron-left',
      'cog',
      'credit-card',
      'dollar',
      'eye',
      'eye-slash',
      'globe',
      'question-circle',
      'qrcode',
      'search',
      'shield',
      'sliders-h',
      'sort-alt',
      'times',
      'user',
      'user-edit'
    ].includes(prop)
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

const btnClasses = computed(() => ({
  'btn-circle': true,
  [`btn-circle--${props.size}`]: true,
}));

const iconClasses = computed(() => ({
  'pi': true,
  [`pi-${props.icon}`]: true,
  [`pi--${props.size}`]: true,
}));

</script>

<style lang="scss" scoped>
.btn-circle__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn-circle {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: $white-300;

    &:focus {
      outline: solid 2px $blue-300;
      outline-offset: 1px;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &:hover {
      background-color: darken($white-300, $hover-darken);
    }

    &:active {
      background-color: $white-300;
    }

    &--regular {
      width: 64px;
      height: 64px;
    }

    &--small {
      width: 32px;
      height: 32px;
    }

    &__label {
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      margin-top: 4px;
    }
  }

  .pi {
    &--regular {
      font-size: 1.5rem;
    }

    &--small {
      font-size: 1rem;
    }
  }
}
</style>
