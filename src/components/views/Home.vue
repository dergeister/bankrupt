<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n";

defineProps({
  msg: String,
})

const { t } = useI18n();

const mensagem = t('user.name');

const count = ref(0);
</script>

<template>
  <h1>Home</h1>
</template>

<style scoped>

</style>
