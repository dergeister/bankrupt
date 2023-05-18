<template>
  <div class="center">
    <PillButton size="small">
      teste
    </PillButton>
    <PillButton disabled>
      teste
    </PillButton>
    <PillButton size="large">
      teste
    </PillButton>
  </div>
</template>

<script setup>
import PillButton from '../atoms/buttons/PillButton.vue';
</script>

<style scoped>
.center {
  padding: 2rem;
  display: grid;
  place-items: center;
}
</style>
