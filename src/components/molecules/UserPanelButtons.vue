<template>
<div class="user-panel-buttons">
  <UserPanelButton
    v-for="item in buttons"
    :icon="item.icon"
    :emmit="item.emmit"
  />
</div>
</template>

<script setup>
import { ref } from 'vue';

import UserPanelButton from '../atoms/buttons/UserPanelButton.vue';

const buttons = ref([
  {
    icon: 'eye',
    emmit: 'toggle-display-monney'
  },
  {
    icon: 'bell',
    emmit: 'notifications'
  },
  {
    icon: 'cog',
    emmit: 'settings'
  },
  {
    icon: 'sign-out',
    emmit: 'logout'
  },
]);
</script>

<style lang="scss" scoped>
.user-panel-buttons {
  display: flex;
  align-items: center;
  justify-content: center;

  button + button {
    margin-left: 1rem;
  }
}
</style>
