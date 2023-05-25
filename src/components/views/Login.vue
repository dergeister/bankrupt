<template>
<div class="login form">
  <div class="login__logo-area">
    <img
      src="../../assets/logos/logo-white.png"
      alt="bankrupt-logo"
      class="login__logo-area__logo"
    >
  </div>
  <div class="login__form-area">
    <LoginForm />
  </div>
</div>
</template>

<script setup>
import LoginForm from '../organisms/forms/LoginForm.vue';
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
      height: 116px;
    }
  }

  &__form-area {
    display: grid;
    place-items: center;
    padding: 2rem;
  }
}
</style>
