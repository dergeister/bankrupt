<script setup>
import { useI18n } from '#imports'
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
      <p>{{ $t('asd') }}</p>
    </form>
  </div>
</template>
