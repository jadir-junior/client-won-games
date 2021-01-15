import ExploreSideBar, { ExploreSideBarProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

import items from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSideBarProps> = (args) => (
  <ExploreSideBar {...args} />
)
