<template>
<div class="account-balance">
  <div class="account-balance__panel">
    <span class="account-balance__label">
      {{ t('balance.currentBalance') }}
    </span>
    <span class="account-balance__amount">
      {{ props.amount }}
    </span>
  </div>
  <div class="account-balance__actions">
    <span>a</span>
    <span>b</span>
  </div>
</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  amount: {
    type: String,
    default: 'R$ 0,00'
  },
});
</script>

<style lang="scss" scoped>
.account-balance {
  display: flex;
  align-items: center;

  &__panel {
    background-color: $white-300;
    padding: 1.5rem;
    border: solid 1px $gray-400;
    border-radius: 16px;
    min-width: 300px;
  }
  
  &__label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  &__amount {
    display: block;
    font-size: 1.125rem;
    font-weight: 700;
  }
}

</style>
