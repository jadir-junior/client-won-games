import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileForm from '.'

export default {
  title: 'form/ProfileForm',
  component: ProfileForm,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <ProfileForm />
  </div>
)
