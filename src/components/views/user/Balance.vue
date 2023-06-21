<template>
<UserLayout>
  <div class="balance">
    <span class="balance__amount">
      Balance: {{ balance }}
    </span>
  </div>
</UserLayout>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import UserLayout from '../../templates/layouts/UserLayout.vue';

import { useAccountStore } from '../../../stores/account';
import { useAuthenticationStore } from '../../../stores/authentication';

const accountStore = useAccountStore();
const authStore = useAuthenticationStore();

const { balance } = storeToRefs(accountStore); 
const { currentAccount } = storeToRefs(authStore);

const { fetchAccount, fetchBalance } = accountStore;

onMounted(async () => {
  await fetchAccount(currentAccount.value);
  await fetchBalance(currentAccount.value)
})
</script>

<style lang="scss" scoped>

</style>
