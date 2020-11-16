import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: 300 }}>
    <GameCard {...args} />
  </div>
)

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