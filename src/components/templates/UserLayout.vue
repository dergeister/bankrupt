<template>
<div class="user-layout">
  <div class="user-layout__content">
    <Navigation />
    <main class="user-layout__content__main">
      <slot></slot>
    </main>
  </div>
</div>
</template>

<script setup>
import Navigation from '../organisms/general/Navigation.vue';
</script>

<style lang="scss" scoped>
.user-layout {
  background-color: $white-200;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  &__content {
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__main {
      padding: 2rem 4rem;
    }
  }
}
</style>
