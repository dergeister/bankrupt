<template>
<div class="create-account">
  <LoginForm />
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


</script>

<style lang="scss" scoped>
.create-account {
  display: grid;
  place-items: center;
  background-color: $blue-400;
  min-height: 100vh;
}
</style>
