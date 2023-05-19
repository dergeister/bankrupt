<template>
  <div class="center">
    {{ valor }}
    <InputText v-model="valor" :placeholder="'asdfg'" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import InputText from '../atoms/inputs/InputText.vue';

const valor = ref('test');
</script>

<style scoped>
.center {
  padding: 2rem;
  display: grid;
  place-items: center;
}
</style>
