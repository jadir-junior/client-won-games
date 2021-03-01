import { Meta, Story } from '@storybook/react/types-6-0'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Mobile: Story = (args) => <Menu {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}

export const Desktop: Story = (args) => <Menu {...args} />

export const Logged: Story = (args) => <Menu {...args} />

Logged.args = {
  username: 'Mick Jagger'
}
