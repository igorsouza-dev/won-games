import React from 'react'

import { Meta, Story } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Most popular',
    color: 'white'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      options: ['white', 'black'],
      control: { type: 'select' }
    }
  }
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Basic = Template.bind({})
