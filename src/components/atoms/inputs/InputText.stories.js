import InputText from './InputText.vue';

export default {
  title: 'Inputs/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'regular', 'large'],
    },
  },
}

export const Default = {
  args: {
    size: 'regular',
    placeholder: 'type anything!',
    invalid: false,
    disabled: false,
  },
}