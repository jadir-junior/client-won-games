import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    renderWithTheme(<Footer />)
  })

  it('should render 4 column topics', () => {
    const { container } = renderWithTheme(<Footer />)

    const headings = screen.getAllByRole('heading')

    expect(headings).toHaveLength(4)
    expect(headings[0]).toHaveTextContent(/contact us/i)
    expect(headings[1]).toHaveTextContent(/follow us/i)
    expect(headings[2]).toHaveTextContent(/links/i)
    expect(headings[3]).toHaveTextContent(/location/i)

    expect(container.firstChild).toMatchSnapshot()
  })
})
