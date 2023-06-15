<template>
<small :class="classes">{{ label }}</small>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Invalid field'
  },
  show: {
    type: Boolean,
    default: true,
  }
});

const classes = computed(() => ({
  'validation-message': true,
  'validation-message--active': props.show,
}));
</script>

<style lang="scss" scoped>
.validation-message {
  color: $red-400;
  display: none;
  margin-top: 4px;

  &--active {
    display: block;
  }
}
</style>
