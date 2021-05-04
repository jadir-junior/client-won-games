import ExploreSideBar, { ExploreSideBarProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

import items from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items,
    onFilter: () => console.log('filter')
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSideBarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar {...args} />
  </div>
)

export const withInitialValues: Story<ExploreSideBarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar
      {...args}
      initialValues={{
        platforms: ['windows', 'linux'],
        sort_by: 'high-to-low'
      }}
    />
  </div>
)
