import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../utils/api";
import useEmitter from "../composables/useEmitter"
import wait from "../utils/wait-promise";

export const useAccountStore = defineStore("account", () => {
  const emitter = useEmitter();

  const isLoading = ref(false);
  
  const register = async (account) => {
    isLoading.value = true;

    await wait();

    api.post('/account', account)
    .then((response) => {
      emitter.emit('register-success');
    })
    .catch((error) => {
      emitter.emit('register-error', error.response);
    })
    .finally(() => {
      isLoading.value = false;
    });
  };

  return {
    isLoading,
    register,
  };
});