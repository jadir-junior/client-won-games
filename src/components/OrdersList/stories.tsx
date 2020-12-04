import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersList from '.'
import itemsMock from './mock'

export default {
  title: 'profile/OrdersList',
  component: OrdersList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: itemsMock
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
