import React from 'react'

import { Meta, Story } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Basic = Template.bind({})

Basic.argTypes = {
  color: {
    options: ['white', 'black'],
    control: { type: 'select' }
  },
  size: {
    options: ['normal', 'large'],
    control: { type: 'radio' }
  }
}
