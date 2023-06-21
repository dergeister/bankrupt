<template>
<div class="user-panel">
  <div class="user-panel__name">
    {{ account.name }}
  </div>
  <UserPanelButtons />
</div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import UserPanelButtons from '../../molecules/UserPanelButtons.vue';

import useEmitter from '../../../composables/useEmitter';
import { useAccountStore } from '../../../stores/account';
import { useAuthenticationStore } from '../../../stores/authentication';

const router = useRouter();
const emitter = useEmitter();
const authStore = useAuthenticationStore();
const accountStore = useAccountStore();

const { account } = storeToRefs(accountStore); 

const { logout } = authStore;

onMounted(() => {
  emitter.on('logout', () => {
    logout();

    router.push({
      name: 'login',
    });
  });
});

onUnmounted(() => {
  emitter.off('logout');
});
</script>

<style lang="scss" scoped>
.user-panel {
  padding: 2rem 4rem;
  background-color: $blue-400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__name {
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    color: $white-100;
  }

  @media (max-width: $media-breakpoint)  {
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;

    &__name {
      order: 2;
      align-self: flex-start;
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
}
</style>
