import CircleButton from './CircleButton.vue';

export default {
  title: 'Buttons/CircleButton',
  component: CircleButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'regular'],
    },
    icon: {
      control: {
        type: 'select',
      },
      options: [
        'bars',
        'bell',
        'calendar',
        'chevron-left',
        'cog',
        'credit-card',
        'dollar',
        'eye',
        'eye-slash',
        'globe',
        'question-circle',
        'qrcode',
        'search',
        'shield',
        'sliders-h',
        'sort-alt',
        'times',
        'user',
        'user-edit'
      ],
    },
  },
}

export const Default = {
  args: {
    size: 'regular',
    icon: 'bars',
    label: 'Button',
    disabled: false,
  },
}