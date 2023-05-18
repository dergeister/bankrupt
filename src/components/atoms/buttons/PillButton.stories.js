import PillButton from './PillButton.vue';

export default {
  title: 'Buttons/Pill Button',
  component: PillButton,
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

export const Small = {
  render: () => ({
    components: { PillButton },
    template: '<PillButton size="small">Button</PillButton>',
  }),
}

export const Regular = {
  render: () => ({
    components: { PillButton },
    template: '<PillButton>Button</PillButton>',
  }),
}

export const Large = {
  render: () => ({
    components: { PillButton },
    template: '<PillButton size="large">Button</PillButton>',
  }),
}