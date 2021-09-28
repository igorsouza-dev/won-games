import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('Should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
    const button = screen.getByRole('button', { name: 'Buy now' })
    expect(button).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      fontSize: '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('Should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)
    const button = screen.getByRole('button', { name: 'Buy now' })
    expect(button).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    })
  })
  it('Should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    const button = screen.getByRole('button', { name: 'Buy now' })
    expect(button).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      fontSize: '1.6rem'
    })
  })
  it('Should render with full width', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    const button = screen.getByRole('button', { name: 'Buy now' })
    expect(button).toHaveStyle({
      width: '100%'
    })
  })
  it('Should render with full width', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )
    expect(screen.getByText('Buy now')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('Should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )
    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
