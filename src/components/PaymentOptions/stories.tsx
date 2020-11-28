import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentOptions, { PaymentOptionsProps } from '.'

import cardMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  argTypes: {
    cards: {
      type: ''
    }
  },
  handlePayment: {
    action: 'clicked'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    cards: cardMock
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
