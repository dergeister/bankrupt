<template>
<form
  class="login-form"
  @submit.prevent="submit"
>
  <img
    src="../../../assets/logos/logo.png"
    alt="logo"
    class="login-form__logo"
  >
  <div class="login-form__email">
    <InputText
      :label="t('data.email')"
      v-model="v$.email.$model"
    />
    <ValidationMessage
      :label="t('error.email')"
      :show="submitted && v$.email.$invalid"
    />
  </div>
  <div class="login-form__password">
    <InputText
      :label="t('data.password')"
      type="password"
      v-model="v$.password.$model"
    />
    <ValidationMessage
      :label="t('error.password')"
      :show="submitted && v$.password.$invalid"
    />
  </div>
  <div class="login-form__buttons">
    <Button 
      :label="t('button.login')" 
      :full-width="true"
      :disabled="isLoading"
    />
    <Button
      :label="t('button.forgotPassword')" 
      :full-width="true" 
      variant="text"
      :disabled="isLoading"
    />
    <hr>
    <Button 
      :label="t('button.createNewAccount')"
      :full-width="true"
      variant="text"
      :disabled="isLoading"
    />
  </div>
</form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { storeToRefs } from 'pinia'

import InputText from '../../atoms/inputs/InputText.vue';
import Button from '../../atoms/buttons/Button.vue';
import ValidationMessage from '../../atoms/text/ValidationMessage.vue';

import { useAuthenticationStore } from '../../../stores/authentication';
import useEmitter from '../../../composables/useEmitter';

import '../../../assets/styles/form.scss';

const emitter = useEmitter();
const { t } = useI18n();
const authStore = useAuthenticationStore();

const submitted = ref(false);
const { isLoading } = storeToRefs(authStore);
const { login } = authStore;

const form = reactive({
  email: '',
  password: '',
});

const rules = {
  email: {
    email,
    required
  },
  password: {
    minLength: minLength(8),
    required
  },
};

const v$ = useVuelidate(rules, form);

const submit = async () => {
  submitted.value = true;

  if (v$.value.$invalid) {
    return;
  }

  await login({...form});

  emitter.emit('login');
}
</script>

<style lang="scss" scoped>
.login-form {
  padding: 3rem 2rem 2rem 2rem;
  border-radius: 16px;
  box-shadow: 0 0 10px $gray-400;
  width: 350px;
  background-color: $white-100;

  &__logo {
    display: none;
    width: 100%;
    margin-bottom: 2rem;
  }

  &__email {
    margin-bottom: 2rem;
  }

  &__buttons {
    margin-top: 3rem;

    .btn + .btn {
      margin-top: 1rem;
    }
  }

  @media (max-width: $media-breakpoint)  {
    width: 300px;

    &__logo {
      display: block;
    }
  }
}
</style>
