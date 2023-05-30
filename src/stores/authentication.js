import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../utils/api";
import useEmitter from "../composables/useEmitter"

import wait from "../utils/wait-promise";

export const useAuthenticationStore = defineStore("authentication", () => {
  const emitter = useEmitter();

  const isLoading = ref(false);

  const currentAccount = ref(null);

  const login = async (account) => {
    isLoading.value = true;

    await wait();

    api.get(`/login/${account.email}/${account.password}`)
    .then((response) => {
      currentAccount.value = response;
      emitter.emit('login-success');
    })
    .catch((error) => {
      currentAccount.value = null;
      emitter.emit('login-error', error.response);
    })
    .finally(() => {
      isLoading.value = false;
    });
  };

  const logout = async () => {
    await wait();
    currentAccount.value = null;
  }

  return {
    isLoading,
    login,
    logout,
  };
});