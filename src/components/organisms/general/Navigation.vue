<template>
<nav class="navigation">
  <img
    src="../../../assets/logos/icon.png"
    alt="logo"
    class="navigation__logo"
  >
  <NavButtons />
</nav>
</template>

<script setup>
import NavButtons from '../../molecules/NavButtons.vue';
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $white-200;
  padding: 1rem;
  position: sticky;
  top: 0;

  &__logo {
    height: 32px;
    position: absolute;
    left: 2rem;
  }
  
  @media (max-width: $media-breakpoint)  {
    position: fixed;
    top: auto;
    bottom: 4px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    width: 210px;
    background-color: $white-100;
    border-radius: 50px;
    padding: 0.5rem;
    box-shadow: 0 0 10px $white-300;

    &__logo {
      display: none;
    }
  }
}
</style>
