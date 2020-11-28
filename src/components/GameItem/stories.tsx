import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const withDownload: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)
withDownload.args = {
  downloadLink: 'https://localhost:3000/download/ajsjkhdhaskjd'
}

export const withPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)
withPayment.args = {
  downloadLink: 'https://localhost:3000/download/ajsjkhdhaskjd',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
