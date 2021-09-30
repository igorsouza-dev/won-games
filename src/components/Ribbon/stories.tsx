import React from 'react'

import { Meta, Story } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best seller'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    size: {
      options: ['normal', 'small'],
      control: { type: 'select' }
    }
  }
} as Meta

const Template: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)

export const Basic = Template.bind({})
