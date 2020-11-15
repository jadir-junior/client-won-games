import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Desktop: Story = () => <Footer />

export const Mobile: Story = () => <Footer />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
