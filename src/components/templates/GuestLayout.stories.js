import GuestLayout from './GuestLayout.vue';

export default {
  title: 'Layout/GuestLayout',
  component: GuestLayout,
  tags: ['autodocs'],
  render: (args) => ({
    components: {
      GuestLayout,
    },
    template: '<GuestLayout>SLOT</GuestLayout>',
  }),
}

export const Default = {
  
}