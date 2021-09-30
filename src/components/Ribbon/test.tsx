import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('Should render the heading', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })
  it('Should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })
  it('Should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })
  it('Should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })
  it('Should render with the small size as default', () => {
    renderWithTheme(<Ribbon size="small">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
