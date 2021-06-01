import React from 'react'

import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

const Template: Story = (args) => <Main {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: 'Boilerplate',
  description: 'Nextjs'
}
