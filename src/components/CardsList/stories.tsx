import { Story, Meta } from '@storybook/react/types-6-0'
import CardsList, { CardListProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'profile/CardsList',
  component: CardsList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: 800, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
