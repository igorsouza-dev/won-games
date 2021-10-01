import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'
const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>Clashlands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}
describe('<Banner />', () => {
  it('Should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new Clashlands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('Should render a ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/My Ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: `#3cd3c1`,
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
