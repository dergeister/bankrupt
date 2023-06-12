<template>
<div class="nav-buttons">
  <NavButton
    v-for="item in buttons"
    :label="item.label"
    :icon="item.icon"
    :to="item.to"
    :active="item.to == active"
  />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

import NavButton from '../atoms/buttons/NavButton.vue';

const { t } = useI18n();
const route = useRoute();

const active = ref('');

const buttons = ref([
  {
    label: t('navigation.balance'),
    icon: 'dollar',
    to: 'balance',
  },
  {
    label: t('navigation.creditCard'),
    icon: 'credit-card',
    to: 'credit-card',
  },
  {
    label: t('navigation.investment'),
    icon: 'chart-line',
    to: 'investment',
  },
  {
    label: t('navigation.loan'),
    icon: 'money-bill',
    to: 'loan',
  },
]);

onMounted(() => {
  active.value = route.name;
});
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
