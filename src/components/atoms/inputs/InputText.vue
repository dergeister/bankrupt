<template>
<input
  type="text"
  :class="classes"
  :value="modelValue"
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
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => ({
  'ipt': true,
  [`ipt--${props.variant}`]: true,
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
    background-color: $white-200;

    &:focus {
      background-color: $white-300;
    }
  }
}
</style>
