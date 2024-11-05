import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Click me',
    size: 'medium'
  }
}
