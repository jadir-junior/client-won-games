import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    render(<Footer />)
  })

  it('should render 4 column topics', () => {
    const { container } = render(<Footer />)

    const headings = screen.getAllByRole('heading')

    expect(headings).toHaveLength(4)
    expect(headings[0]).toHaveTextContent(/contact us/i)
    expect(headings[1]).toHaveTextContent(/follow us/i)
    expect(headings[2]).toHaveTextContent(/links/i)
    expect(headings[3]).toHaveTextContent(/location/i)

    expect(container.firstChild).toMatchSnapshot()
  })
})
