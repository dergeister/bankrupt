<template>
<GuestForm>
  <form
    class="login-form form"
    @submit.prevent="handleSubmit"
  >
    <img
      src="../../../assets/logos/logo.png"
      alt="logo"
      class="form__logo"
    >
    <div class="form__title">
      {{t('content.loginFormTitle')}}
    </div>
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
    <div class="form__buttons">
      <Button 
        type="submit"
        :label="t('button.login')" 
        :full-width="true"
        :disabled="isLoading"
      />
      <hr>
      <Button 
        :label="t('button.createNewAccount')"
        :full-width="true"
        variant="text"
        :disabled="isLoading"
        @click="handleRegister"
      />
    </div>
  </form>
</GuestForm>
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
import GuestForm from '../../templates/forms/GuestForm.vue';

import useEmitter from '../../../composables/useEmitter';
import { useAuthenticationStore } from '../../../stores/authentication';

import '../../../assets/styles/form.scss';

const { t } = useI18n();
const emitter = useEmitter();
const authStore = useAuthenticationStore();

const submitted = ref(false);
const { isLoading } = storeToRefs(authStore);

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

const handleSubmit = async () => {
  submitted.value = true;

  if (v$.value.$invalid) {
    return;
  }

  emitter.emit('login-attempt', {...form});
}

const handleRegister = () => {
  emitter.emit('register');
}
</script>

<style lang="scss" scoped>
.login-form {
  &__email {
    margin-bottom: 2rem;
  }
}
</style>
