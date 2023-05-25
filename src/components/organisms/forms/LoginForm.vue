<template>
<form
  class="login-form"
  @submit.prevent=""
>
  <div class="login-form__email">
    <InputText :label="t('data.email')" />
  </div>
  <div class="login-form__password">
    <InputText :label="t('data.password')" />
    <small class="helper-text">{{ t('data.passwordStrength') }}</small>
  </div>
  <div class="login-form__buttons">
    <Button :label="t('button.login')" :full-width="true" />
    <Button :label="t('button.forgotPassword')" :full-width="true" variant="text" />
    <hr>
    <Button :label="t('button.createNewAccount')" :full-width="true" variant="text" />
  </div>
</form>
</template>

<script setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { useI18n } from 'vue-i18n';

import InputText from '../../atoms/inputs/InputText.vue';
import Button from '../../atoms/buttons/Button.vue';

import '../../../assets/styles/form.scss';

const { t } = useI18n();

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
</script>

<style lang="scss" scoped>
.login-form {
  padding: 3rem 2rem 2rem 2rem;
  border-radius: 16px;
  box-shadow: 0 0 10px $gray-400;
  width: 300px;
  background-color: $white-100;

  &__email {
    margin-bottom: 2rem;
  }

  &__buttons {
    margin-top: 3rem;

    .btn + .btn {
      margin-top: 1rem;
    }
  }
}
</style>
