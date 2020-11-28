import { Story, Meta } from '@storybook/react/types-6-0'
import mockCartListIrems from './mock'

import CartList, { CartListProps } from '.'

export default {
  title: 'cart/CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: mockCartListIrems,
    total: 'R$ 330,00'
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
