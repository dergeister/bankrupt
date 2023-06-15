import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "../utils/api";
import useEmitter from "../composables/useEmitter"
import wait from "../utils/wait-promise";

export const useAuthenticationStore = defineStore("authentication", () => {
  const emitter = useEmitter();

  const isLoading = ref(false);

  const currentAccount = computed(() => {

  })

  const login = async (account) => {
    isLoading.value = true;

    await wait();

    api.get(`/login/${account.email}/${account.password}`)
    .then((response) => {
      if(response.data.length > 0) {;
        setCurrentAccount(response.data[0].id);
        emitter.emit('login-success');
      } else {
        setCurrentAccount('');
        emitter.emit('login-error');
      }
    })
    .catch((error) => {
      setCurrentAccount('');
      emitter.emit('login-error');
    })
    .finally(() => {
      isLoading.value = false;
    });
  };

  const logout = () => {
    setCurrentAccount('');
  }

  const setCurrentAccount = (account) => {
    localStorage.account = account;
  }

  return {
    isLoading,
    login,
    logout,
  };
});