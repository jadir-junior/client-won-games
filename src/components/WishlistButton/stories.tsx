import { Meta, Story } from '@storybook/react/types-6-0'
import WishlistButton, { WishlistButtonProps } from '.'

export default {
  title: 'WishlistButton',
  component: WishlistButton
} as Meta

export const Default: Story<WishlistButtonProps> = (args) => (
  <WishlistButton {...args} />
)
