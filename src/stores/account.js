import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../utils/api";
import useEmitter from "../composables/useEmitter"
import wait from "../utils/wait-promise";

export const useAccountStore = defineStore("account", () => {
  const emitter = useEmitter();

  const isLoading = ref(false);
  const account = ref({
    name: '',
    email: '',
  });

  const balance = ref(null)

  const balanceHistory = ref([]);
  
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

  const fetchAccount = async (id) => {
    isLoading.value = true;

    await wait();

    api.get(`/account/${id}`)
    .then((response) => {
      account.value = response.data;
    })
    .catch((error) => {

    })
    .finally(() => {
      isLoading.value = false;
    });
  }

  const fetchBalance = async(accountId) => {
    isLoading.value = true;

    await wait();

    api.get(`/balance/${accountId}`)
    .then((response) => {
      balance.value = response.data[0].amount;
    })
    .catch((error) => {

    })
    .finally(() => {
      isLoading.value = false;
    });
  }

  return {
    isLoading,
    account,
    balance,
    register,
    fetchAccount,
    fetchBalance
  };
});