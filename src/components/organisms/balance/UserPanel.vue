<template>
<div class="user-panel">
  <div class="user-panel__name">
    {{ props.name }}
  </div>
  <UserPanelButtons />
</div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import UserPanelButtons from '../../molecules/UserPanelButtons.vue';

import useEmitter from '../../../composables/useEmitter';
import { useAuthenticationStore } from '../../../stores/authentication';

const props = defineProps({
  name: {
    type: String,
    default: 'Hello User'
  },
});

const router = useRouter();
const emitter = useEmitter();
const authStore = useAuthenticationStore();

const { logout } = authStore;

onMounted(() => {
  emitter.on('logout', () => {
    console.log('asd');
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
