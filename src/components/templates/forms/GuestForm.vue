<template>
<div class="guest-form">
  <slot></slot>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.guest-form {
  padding: 3rem 2rem 2rem 2rem;
  border-radius: 16px;
  box-shadow: 0 0 10px $gray-400;
  background-color: $white-100;
  max-width: 350px;
  width: 100%;

  @media (max-width: $media-breakpoint)  {
    width: 90%;
  }
}
</style>
