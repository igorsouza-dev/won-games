import React from 'react'

import { Meta, Story } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back!',
    subtitle: `Come see John's new adventures`,
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLink: '/rdr2'
  }
} as Meta

const Template: Story<HighlightProps> = (args) => <Highlight {...args} />

export const Basic = Template.bind({})

export const WithFloatImg = Template.bind({})

WithFloatImg.args = {
  floatImage: '/img/red-dead-float.png'
}
