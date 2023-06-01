import NavButton from './NavButton.vue';

export default {
  title: 'Navigation/NavButton',
  component: NavButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: [
        'credit-card',
        'dollar',
        'sort-alt',
      ],
    },
  },
}

export const Default = {
  args: {
    icon: 'dollar',
    label: 'Button',
    active: false,
  },
}