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
  render: () => ({
    components: { Button },
    template: '<Button>Button</Button>',
  }),
}

export const Filled = {
  render: () => ({
    components: { Button },
    template: `
      <Button size="small">Button</Button>
      <br>
      <Button>Button</Button>
      <br>
      <Button size="large">Button</Button>
    `,
  }),
}

export const Text = {
  render: () => ({
    components: { Button },
    template: `
      <Button size="small" variant="text">Button</Button>
      <br>
      <Button variant="text">Button</Button>
      <br>
      <Button size="large" variant="text">Button</Button>
    `,
  }),
}