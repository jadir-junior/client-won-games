import GameInfo, { GameInfoProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

import { CartContextData } from 'hooks/use-cart'
import GameInfoMock from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: GameInfoMock
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}
