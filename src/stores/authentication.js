import { ref } from "vue";
import { defineStore } from "pinia";

import wait from "../utils/wait-promise";

export const useAuthenticationStore = defineStore("authentication", () => {

  const isLoading = ref(false);

  const login = async (user) => {
    isLoading.value = true;

    await wait();

    isLoading.value = false;
  };

  return {
    isLoading,
    login
  };
});