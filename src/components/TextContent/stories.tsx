import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'
import textContentMock from './mock'

export default {
  title: 'Game/TextContent',
  component: TextContent,
  args: textContentMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
