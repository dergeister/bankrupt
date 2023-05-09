import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const isLoading = ref(false);
  const user = reactive({
    name: "",
    email: "",
  });

  const anyFunction = () => {
    // refs must be accessed via .value inside the store
    isLoading.value = true;

    // reactive can be used as an object normally
    // but when destructured via storeToRefs in other files, it must be used with .value as well
    user.name = "teste nome";
    user.email = 'teste@teste'
  };

  // only data on the return will be accessible to other files.
  return {
    isLoading,
    user,
    anyFunction,
  };
});