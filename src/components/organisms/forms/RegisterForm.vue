<template>
<form
  class="register-form"
  @submit.prevent="submit"
>
  <img
    src="../../../assets/logos/logo.png"
    alt="logo"
    class="register-form__logo"
  >
  <div class="register-form__fields">
    <div class="register-form__fields__name">
      <InputText
        :label="t('data.name')"
        v-model="v$.name.$model"
      />
      <ValidationMessage
        :label="t('error.name')"
        :show="submitted && v$.name.$invalid"
      />
    </div>
    <div class="register-form__fields__cpf">
      <InputText
        :label="t('data.cpf')"
        type="text"
        v-model="v$.cpf.$model"
      />
      <ValidationMessage
        :label="t('error.cpf')"
        :show="submitted && v$.cpf.$invalid"
      />
    </div>
    <div class="register-form__fields__email">
      <InputText
        :label="t('data.email')"
        type="email"
        v-model="v$.email.$model"
      />
      <ValidationMessage
        :label="t('error.email')"
        :show="submitted && v$.email.$invalid"
      />
    </div>
    <div class="register-form__fields__phone">
      <InputText
        :label="t('data.phone')"
        type="text"
        v-model="v$.phone.$model"
      />
      <ValidationMessage
        :label="t('error.phone')"
        :show="submitted && v$.phone.$invalid"
      />
    </div>
    <div class="register-form__fields__password">
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
    <div class="register-form__fields__repeat-password">
      <InputText
        :label="t('data.repeatPassword')"
        type="password"
        v-model="v$.repeatPassword.$model"
      />
      <ValidationMessage
        :label="t('error.repeatPassword')"
        :show="submitted && v$.repeatPassword.$invalid"
      />
    </div>
  </div>
  <div class="register-form__buttons">
    <Button 
      type="submit"
      :label="t('button.register')" 
      :full-width="true"
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

import useEmitter from '../../../composables/useEmitter';
import { useAuthenticationStore } from '../../../stores/authentication';

import '../../../assets/styles/form.scss';

const { t } = useI18n();
const emitter = useEmitter();
const authStore = useAuthenticationStore();

const submitted = ref(false);
const { isLoading } = storeToRefs(authStore);

const form = reactive({
  name: '',
  cpf: '',
  email: '',
  phone: '',
  password: '',
  repeatPassword: '',
});

const rules = {
  name: {
    required
  },
  cpf: {
    required
  },
  email: {
    email,
    required
  },
  phone: {
    required
  },
  password: {
    minLength: minLength(8),
    required
  },
  repeatPassword: {
    required
  },
};

const v$ = useVuelidate(rules, form);

const submit = async () => {
  submitted.value = true;

  if (v$.value.$invalid) {
    return;
  }

  emitter.emit('register-attempt', {...form});
}
</script>

<style lang="scss" scoped>
.register-form {
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 0 10px $gray-400;
  background-color: $white-100;
  text-align: center;

  &__logo {
    width: 300px;
    margin-bottom: 2rem;
  }

  &__fields {
    // display: grid;
    // grid-template-columns: 1fr 1fr;

    > div {
      padding: 1rem;
    }
  }

  &__buttons {
    margin-top: 3rem;
  }

  @media (max-width: $media-breakpoint)  {
    width: 300px;
  }
}
</style>
