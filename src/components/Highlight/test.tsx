import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'heading 1',
  subtitle: 'heading 2',
  buttonLabel: 'buy now',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('Should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)
    expect(
      screen.getByRole('heading', { name: 'heading 1' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'heading 2' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'buy now' })).toBeInTheDocument()
  })
  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})
