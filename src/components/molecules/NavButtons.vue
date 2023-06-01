<template>
<div class="nav-buttons">
  <NavButton
    v-for="item in buttons"
    :label="item.label"
    :icon="item.icon"
    :to="item.to"
  />
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import NavButton from '../atoms/buttons/NavButton.vue';

const { t } = useI18n();

const buttons = ref([
  {
    label: t('navigation.balance'),
    icon: 'dollar',
    to: 'balance'
  },
  {
    label: t('navigation.creditCard'),
    icon: 'credit-card',
    to: 'credit-card'
  },
  {
    label: t('navigation.transactions'),
    icon: 'sort-alt',
    to: 'transactions'
  },
])
</script>

<style lang="scss" scoped>
.nav-buttons {
  display: flex;
  align-items: center;
  justify-content: center;

  button + button {
    margin-left: 1rem;
  }
}
</style>
