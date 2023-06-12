<template>
  <GuestLayout>
    <LoginForm />
  </GuestLayout>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import GuestLayout from '../../templates/layouts/GuestLayout.vue';
import LoginForm from '../../organisms/forms/LoginForm.vue';

import useEmitter from '../../../composables/useEmitter';
import { useAuthenticationStore } from '../../../stores/authentication';

const router = useRouter();
const emitter = useEmitter();
const authStore = useAuthenticationStore();

const { login } = authStore;

onMounted(() => {
  emitter.on('login-attempt', (account) => {
    login(account);
  });

  emitter.on('login-success', () => {
    router.push({
      name: 'balance',
    });
  });

  emitter.on('login-error', () => {
    console.log('login-error');
  });

  emitter.on('register', () => {
    router.push({
      name: 'register',
    });
  });
});

onUnmounted(() => {
  emitter.off('login-attempt');
  emitter.off('login-success');
  emitter.off('login-error');
  emitter.off('register');
});
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  &__logo-area {
    display: grid;
    place-items: center;
    background-color: $blue-400;
    padding: 2rem;

    &__logo {
      width: 500px;
    }
  }

  &__form-area {
    display: grid;
    place-items: center;
    padding: 2rem;
  }

  @media (max-width: $media-breakpoint)  {
    grid-template-columns: 1fr;

    &__logo-area {
      display: none;
    }

    &__form-area {
      padding: 0;
      width: 100%;
      background-color: $blue-400;
    }
  }
}
</style>
