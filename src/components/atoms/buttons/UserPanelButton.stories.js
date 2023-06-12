import UserPanelButton from './UserPanelButton.vue';

export default {
  title: 'Buttons/UserPanelButton',
  component: UserPanelButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: [
        'bell',
        'cog',
        'eye',
        'eye-slash',
        'globe',
      ],
    },
  },
}

export const Default = {
  args: {
    icon: 'bell',
    disabled: false,
  },
}