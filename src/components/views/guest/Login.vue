<template>
<div class="login">
  <div class="login__logo-area">
    <img
      src="../../../assets/logos/logo-white.png"
      alt="logo"
      class="login__logo-area__logo"
    >
  </div>
  <div class="login__form-area">
    <LoginForm />
  </div>
</div>
</template>

<script setup>
import LoginForm from '../../organisms/forms/LoginForm.vue';
import useEmitter from '../../../composables/useEmitter';
import { useRouter } from 'vue-router';
import { useAuthenticationStore } from '../../../stores/authentication';

const router = useRouter();
const emitter = useEmitter();
const authStore = useAuthenticationStore();

const { login } = authStore;

emitter.on('login-attempt', (account) => {
  login(account);
});

emitter.on('login-success', () => {
  router.push({
    name: 'balance',
  });
});

emitter.on('login-error', (response) => {
  console.log(response);
});

emitter.on('account-register', () => {
  router.push({
    name: 'register',
  });
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
