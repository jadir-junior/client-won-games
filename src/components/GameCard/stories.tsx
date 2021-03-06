import GameCard, { GameCardProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

import { CartContextData } from 'hooks/use-cart'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: 300 }}>
    <GameCard {...args} />
  </div>
)

export const isInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: 300 }}>
    <GameCard {...args} />
  </div>
)

isInCart.args = {
  isInCart: () => true
}

export const withRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: 300 }}>
    <GameCard {...args} />
  </div>
)

withRibbon.args = {
  ribbon: '20%',
  ribbonColor: 'secondary',
  ribbonSize: 'small'
}
