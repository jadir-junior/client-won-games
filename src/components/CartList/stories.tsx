import { Meta, Story } from '@storybook/react/types-6-0'

import CartList from '.'
import items from './mock'

export default {
  title: 'cart/CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: '$330.00',
  cartContextValue: { items }
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

WithButton.args = {
  total: '$330.00',
  cartContextValue: { items }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
