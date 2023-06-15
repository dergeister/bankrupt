import UserPanelButton from './UserPanelButton.vue';

import { userPanelIcons } from '../../../utils/icons';

export default {
  title: 'Buttons/UserPanelButton',
  component: UserPanelButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: userPanelIcons,
    },
  },
}

export const Default = {
  args: {
    icon: 'bell',
    disabled: false,
  },
}