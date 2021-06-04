import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('Should render the heading', () => {
    renderWithTheme(<Heading>Lorem Ipsum</Heading>)
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toBeInTheDocument()
  })
  it('Should render the heading with black color', () => {
    renderWithTheme(<Heading color="black">Lorem Ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('Should render the heading with left line', () => {
    renderWithTheme(<Heading lineLeft>Lorem Ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })
  it('Should render the heading with bottom line', () => {
    renderWithTheme(<Heading lineBottom>Lorem Ipsum</Heading>)
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
})
