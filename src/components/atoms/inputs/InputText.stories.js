import InputText from './InputText.vue';

export default {
  title: 'Inputs/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['transparent', 'filled'],
    },
  },
}

export const Default = {
  render: () => ({
    components: { InputText },
    template: '<InputText placeholder="type any text" />',
  }),
}