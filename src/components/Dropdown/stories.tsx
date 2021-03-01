import { Meta, Story } from '@storybook/react/types-6-0'

import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => <Dropdown {...args} />

Default.args = {
  title: 'Title',
  children: 'Content'
}
