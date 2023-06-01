<template>
<form
  class="register-form form"
  @submit.prevent="handleSubmit"
>
  <img
    src="../../../assets/logos/logo.png"
    alt="logo"
    class="form__logo"
  >
  <div class="form__title">
    {{t('content.registerFormTitle')}}
  </div>
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
    <div class="register-form__fields__password">
      <InputText
        :label="t('data.password')"
        type="password"
        v-model="v$.password.$model"
      />
      <HelperMessage :label="t('content.passwordStrength')"/>
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
  <div class="form__buttons">
    <Button 
      type="submit"
      :label="t('button.register')" 
      :full-width="true"
      :disabled="isLoading"
    />
    <hr>
    <Button 
      :label="t('button.return')" 
      :full-width="true"
      variant="text"
      :disabled="isLoading"
      @click="handleReturn"
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
import HelperMessage from '../../atoms/text/HelperMessage.vue';

import useEmitter from '../../../composables/useEmitter';
import { useAccountStore } from '../../../stores/account';

import '../../../assets/styles/form.scss';

const { t } = useI18n();
const emitter = useEmitter();
const accountStore = useAccountStore();

const submitted = ref(false);
const { isLoading } = storeToRefs(accountStore);

const form = reactive({
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
});

const rules = {
  name: {
    required
  },
  email: {
    email,
    required
  },
  password: {
    required,
    minLength: minLength(8),
  },
  repeatPassword: {
    required,
    minLength: minLength(8),
    equal: (value) => {
      return value == form.password
    }
  },
};

const v$ = useVuelidate(rules, form);

const handleSubmit = async () => {
  submitted.value = true;

  if (v$.value.$invalid) {
    return;
  }

  emitter.emit('register-attempt', {
    name: form.name,
    email: form.email,
    password: form.password
  });
}

const handleReturn = () => {
  emitter.emit('login');
}
</script>

<style lang="scss" scoped>
.register-form {
  padding: 3rem 2rem 2rem 2rem;
  border-radius: 16px;
  box-shadow: 0 0 10px $gray-400;
  background-color: $white-100;
  max-width: 350px;
  width: 100%;

  &__fields {
    div + div {
      margin-top: 1rem;
    }
  }
  
  @media (max-width: $media-breakpoint)  {
    width: 90%;
  }
}
</style>
