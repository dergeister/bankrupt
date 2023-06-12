<template>
<div class="user-layout">
  <div class="user-layout__content">
    <Navigation />
    <UserPanel />
    <main class="user-layout__main">
      <slot></slot>
    </main>
  </div>
</div>
</template>

<script setup>
import Navigation from '../../organisms/general/Navigation.vue';
import UserPanel from '../../organisms/balance/UserPanel.vue';
</script>

<style lang="scss" scoped>
.user-layout {
  // background-color: $blue-300;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  &__content {
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: $white-200;

  }

  &__main {
    padding: 2rem 4rem;
  }

  @media (max-width: $media-breakpoint)  {
    &__main {
      padding: 1rem;
    }
  }
}
</style>
