import { render, screen } from 'utils/test-utils'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render the Empty', () => {
    const { container } = render(<Empty {...props} hasLink />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Empty, image, title, description and button(link)', () => {
    render(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })

  it('should not render a link if hasnt', () => {
    render(<Empty {...props} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
