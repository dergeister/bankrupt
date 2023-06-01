<template>
<small :class="classes">{{ label }}</small>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Helper Message'
  },
});

const classes = computed(() => ({
  'helper-message': true
}));
</script>

<style lang="scss" scoped>
.helper-message {
  font-size: 0.75rem;
  color: $gray-400;
}
</style>
