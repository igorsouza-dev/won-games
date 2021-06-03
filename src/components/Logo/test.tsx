import { screen } from '@testing-library/react'
import 'jest-styled-components'

import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render with white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black label when color is informed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a normal size logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      width: '11rem'
    })
  })
  it('should render a bigger logo when size=large', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      width: '20rem'
    })
  })
  it('should render a bigger logo when hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
