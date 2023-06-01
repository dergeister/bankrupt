<template>
<div class="guest-layout">
  <aside class="guest-layout__logo-area">
    <img
      src="../../assets/logos/logo-white.png"
      alt="logo"
      class="guest-layout__logo-area__logo"
    >
  </aside>
  <main class="guest-layout__content">
    <slot></slot>
  </main>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.guest-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  &__logo-area {
    display: grid;
    place-items: center;
    background-color: $blue-400;
    padding: 2rem;

    &__logo {
      width: 500px;
    }
  }

  &__content {
    display: grid;
    place-items: center;
    padding: 2rem;
  }

  @media (max-width: $media-breakpoint)  {
    grid-template-columns: 1fr;

    &__logo-area {
      display: none;
    }

    &__content {
      padding: 0;
      width: 100%;
      background-color: $blue-400;
    }
  }
}
</style>
