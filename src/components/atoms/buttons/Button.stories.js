import Button from './Button.vue';

export default {
  title: 'Buttons/ Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'regular', 'large'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['filled', 'text'],
    },
  },
}

export const Default = {
  args: {
    size: 'regular',
    variant: 'filled',
    label: 'Button',
    disabled: false,
  },
}