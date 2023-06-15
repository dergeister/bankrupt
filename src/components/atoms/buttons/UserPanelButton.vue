<template>
<button
  class="btn-user-panel"
  :disabled="disabled"
  @click="handleClick"
>
  <i :class="iconClasses"></i>
</button>
</template>

<script setup>
import { computed } from 'vue';

import { userPanelIcons } from '../../../utils/icons';
import useEmitter from '../../../composables/useEmitter';

import 'primeicons/primeicons.css';

const props = defineProps({
  icon: {
    type: String,
    default: 'bell',
    validator: (prop) => userPanelIcons.includes(prop)
  },
  emmit: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

const iconClasses = computed(() => ({
  'pi': true,
  [`pi-${props.icon}`]: true,
}));

const emitter = useEmitter();

const handleClick = () => {
  console.log(props.emmit)
  emitter.emit(props.emmit);
}
</script>

<style lang="scss" scoped>
.btn-user-panel {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: $white-100;
  color: $blue-400;
  width: 32px;
  height: 32px;

  &:focus {
    outline: solid 2px $white-100;
    outline-offset: 1px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    background-color: $white-200;
  }

  &:active {
    background-color: $white-100;
  }

  .pi {
    font-size: 1rem;
  }
}
</style>
