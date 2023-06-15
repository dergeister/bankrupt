import CircleButton from './CircleButton.vue';

import { circleButtonIcons } from '../../../utils/icons';

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
      options: circleButtonIcons,
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