import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container, getByRole } = render(<Main />)
    const heading = getByRole('heading', { name: 'Nextjs boilerplate' })
    expect(heading).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
