import React from 'react'

import { Meta, Story } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

const Template: Story = (args) => <Footer {...args} />

export const Basic = Template.bind({})

Basic.args = {}
