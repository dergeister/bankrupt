<template>
  <GuestLayout>
    <RegisterForm />
  </GuestLayout>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import GuestLayout from '../../templates/layouts/GuestLayout.vue';
import RegisterForm from '../../organisms/forms/RegisterForm.vue';

import useEmitter from '../../../composables/useEmitter';
import { useAccountStore } from '../../../stores/account';

const router = useRouter();
const emitter = useEmitter();
const accountStore = useAccountStore();

const { register } = accountStore;

onMounted(() => {
  emitter.on('register-attempt', (account) => {
    register(account);
  });
  
  emitter.on('login', () => {
    router.push({
      name: 'login',
    });
  });
});

onUnmounted(() => {
  emitter.off('register-attempt');
  emitter.off('login');
});
</script>

<style lang="scss" scoped>

</style>
