import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Mobile: Story = (args) => <Menu {...args} />

export const Desktop: Story = (args) => <Menu {...args} />

Desktop.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
