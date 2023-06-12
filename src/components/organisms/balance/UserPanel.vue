<template>
<div class="user-panel">
  <div class="user-panel__name">
    {{ props.name }}
  </div>
  <UserPanelButtons />
</div>
</template>

<script setup>
import UserPanelButtons from '../../molecules/UserPanelButtons.vue';

const props = defineProps({
  name: {
    type: String,
    default: 'Hello User'
  },
});
</script>

<style lang="scss" scoped>
.user-panel {
  padding: 2rem 4rem;
  background-color: $blue-400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__name {
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    color: $white-100;
  }

  @media (max-width: $media-breakpoint)  {
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;

    &__name {
      order: 2;
      align-self: flex-start;
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
}
</style>
