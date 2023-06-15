import NavButton from './NavButton.vue';

import { navButtonIcons } from '../../../utils/icons';

export default {
  title: 'Navigation/NavButton',
  component: NavButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: navButtonIcons,
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